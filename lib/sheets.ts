import { google } from "googleapis";

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").replace(/\r/g, ""),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

const SHEET = "Product AI CAMP申込";

export async function appendCampRow(data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  paymentMethod: "card" | "bank";
  status: string;
  paymentId: string;
  contractUrl?: string;
}) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${SHEET}!A:J`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        now,
        data.name,
        data.email,
        data.phone,
        data.address,
        data.date,
        data.paymentMethod === "card" ? "クレジットカード" : "銀行振込",
        data.status,
        data.paymentId,
        data.contractUrl ?? "",
      ]],
    },
  });
}

export async function getBankApplications() {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${SHEET}!A:I`,
  });

  const rows = res.data.values ?? [];
  return rows.slice(1).map((row, index) => ({
    rowIndex: index + 2,
    createdAt: row[0] ?? "",
    name: row[1] ?? "",
    email: row[2] ?? "",
    phone: row[3] ?? "",
    address: row[4] ?? "",
    date: row[5] ?? "",
    paymentMethod: row[6] ?? "",
    status: row[7] ?? "",
    paymentId: row[8] ?? "",
  }));
}

export async function updateStatus(rowIndex: number, status: string) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${SHEET}!H${rowIndex}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[status]] },
  });
}
