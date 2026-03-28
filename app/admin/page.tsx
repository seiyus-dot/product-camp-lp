"use client";

import { useEffect, useState } from "react";

type Application = {
  rowIndex: number;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  paymentMethod: string;
  status: string;
  paymentId: string;
};

const DATE_LABELS: Record<string, string> = {
  "apr11-12": "4/11・12",
  "apr25-26": "4/25・26",
};

export default function AdminPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirming, setConfirming] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const fetchApplications = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/applications");
    const data = await res.json();
    setApplications(data);
    setLoading(false);
  };

  useEffect(() => { fetchApplications(); }, []);

  const handleConfirm = async (app: Application) => {
    if (!confirm(`${app.name} さんの参加を確定して確定メールを送信しますか？`)) return;
    setConfirming(app.rowIndex);
    try {
      const res = await fetch("/api/admin/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rowIndex: app.rowIndex,
          name: app.name,
          email: app.email,
          date: app.date,
        }),
      });
      if (!res.ok) throw new Error("失敗しました");
      setMessage(`${app.name} さんに確定メールを送信しました`);
      await fetchApplications();
    } catch {
      setMessage("エラーが発生しました");
    } finally {
      setConfirming(null);
    }
  };

  const statusColor = (status: string) => {
    if (status === "確定" || status === "完了") return "bg-green-100 text-green-700";
    if (status === "入金待ち") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">PRODUCT AI CAMP 申込管理</h1>
          <button
            onClick={fetchApplications}
            className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            更新
          </button>
        </div>

        {message && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
            {message}
          </div>
        )}

        {loading ? (
          <p className="text-gray-500 text-sm">読み込み中...</p>
        ) : applications.length === 0 ? (
          <p className="text-gray-500 text-sm">申込データがありません</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm whitespace-nowrap">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">申込日時</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">氏名</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">メール</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">電話</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">日程</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">支払方法</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">ステータス</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">アクション</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.rowIndex} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-500">{app.createdAt}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{app.name}</td>
                      <td className="px-4 py-3 text-gray-600">{app.email}</td>
                      <td className="px-4 py-3 text-gray-600">{app.phone}</td>
                      <td className="px-4 py-3 text-gray-600">{DATE_LABELS[app.date] ?? app.date}</td>
                      <td className="px-4 py-3 text-gray-600">{app.paymentMethod}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {app.status === "入金待ち" && (
                          <button
                            onClick={() => handleConfirm(app)}
                            disabled={confirming === app.rowIndex}
                            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
                          >
                            {confirming === app.rowIndex ? "送信中..." : "入金確認・確定メール送信"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
