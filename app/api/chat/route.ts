    import { GoogleGenerativeAI } from "@google/generative-ai";
    import { NextResponse } from "next/server";

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        });

        const prompt = `
            Kamu adalah AI live chat website Desa Girimulyo, windusari, magelang.

            ATURAN WAJIB:
            - Anggap user adalah warga Desa Girimulyo kecuali dinyatakan sebaliknya
            - Jika pertanyaan yang sama diulang, LANJUTKAN jawaban sebelumnya
            - JANGAN mengulang pertanyaan klarifikasi yang sudah dijawab user
            - Fokus ke konteks peternakan, pertanian, dan desa Girimulyo
            - Jawab dengan data praktis (angka, estimasi, contoh)
            - Jawab dengan respon yang singkat dan padat
            - Jangan gunakan format ** bold** atau _italic_ gunakan format teks biasa

            Riwayat percakapan:

            ${messages
            .map((m: any) => `${m.role}: ${m.content}`)
            .join("\n")}
        `;

        const result = await model.generateContent(prompt);

        return NextResponse.json({
        reply: result.response.text(),
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
        { error: "AI error" },
        { status: 500 }
        );
    }
    }
