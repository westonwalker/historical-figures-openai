import { OpenAI } from "langchain/llms/openai";
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from '$env/static/private'

export const actions = {
    default: async (event) => {
        const configuration = new Configuration({
          apiKey: OPENAI_API_KEY,
        });
        const openAIAPI = new OpenAIApi(configuration);
        const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 });
        const res = await model.call(
            "Give me the name of one historical figure and a list of their great achievements. Return the name and achievements in a json object with properties lowercased."
        );
        const info = JSON.parse(res);
        console.log(info);
        const response = await openAIAPI.createImage({
            prompt: `${info.name}, huggy wuggy from poppy playtime video game, fullbody, ultra high detailed, glowing lights, oil painting, greg rutkowski, charlie bowater, beeple, unreal 5, daz, hyperrealistic, octane render, rpg portrait, dynamic lighting, fantasy art, beautiful face`,
            n: 1,
            size: "1024x1024",
        });
        return {
            info: info,
            image: response.data.data[0].url,
            isLoading: false
        };
    }
};