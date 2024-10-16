export let assistantId = "asst_mLmxyaUoGEv14ZLqqC1WWZRS"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
