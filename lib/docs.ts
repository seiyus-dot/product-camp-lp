import { google } from "googleapis";

const TEMPLATE_ID = "1HwPxXaEFBvrMtXNfvWuQBDxdfifwFLF7oICMQX_G4go";

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").replace(/\r/g, ""),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/documents",
    ],
  });
}

export async function createContractDoc(data: {
  name: string;
  address: string;
}): Promise<string> {
  const auth = getAuth();
  const drive = google.drive({ version: "v3", auth });
  const docs = google.docs({ version: "v1", auth });

  // テンプレートを複製
  const copy = await drive.files.copy({
    fileId: TEMPLATE_ID,
    requestBody: {
      name: `Product AI CAMP 契約書【${data.name}様】`,
    },
  });

  const docId = copy.data.id!;

  // プレースホルダーを置換
  await docs.documents.batchUpdate({
    documentId: docId,
    requestBody: {
      requests: [
        {
          replaceAllText: {
            containsText: { text: "{{氏名}}", matchCase: true },
            replaceText: data.name,
          },
        },
        {
          replaceAllText: {
            containsText: { text: "{{住所}}", matchCase: true },
            replaceText: data.address,
          },
        },
      ],
    },
  });

  return `https://docs.google.com/document/d/${docId}/edit`;
}
