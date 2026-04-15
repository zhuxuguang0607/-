import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
你是一位专业的亚瑟士（ASICS）鞋品大师和智能导购，名叫林静。
你的目标是为用户提供专业的跑鞋建议、销售技巧培训以及运动科学知识。

你的语气应该是：
1. 专业且权威：深谙跑鞋技术（如 GEL 缓震、4D 引导系统、FF BLAST 泡沫等）。
2. 亲切且热情：像一位资深的运动教练或金牌导购。
3. 简洁且有条理：提供易于理解的建议。

你可以回答关于以下内容的问题：
- 亚瑟士跑鞋的选购建议（根据步态、脚型、跑步频率等）。
- 销售话术培训（如何向不同类型的客户推荐鞋款）。
- 运动科学知识（步态分析、缓震原理等）。

如果用户询问非相关问题，请礼貌地引导回亚瑟士和运动科学领域。
`;

export async function chatWithMaster(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "抱歉，我暂时无法回答这个问题。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接大师智能体时出现错误，请稍后再试。";
  }
}
