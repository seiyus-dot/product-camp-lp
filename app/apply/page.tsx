import ApplyForm from "@/components/ApplyForm";

export const metadata = {
  title: "申込フォーム | PRODUCT AI CAMP",
  description: "PRODUCT AI CAMP 申込フォーム",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <ApplyForm />
    </main>
  );
}
