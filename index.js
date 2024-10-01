// decoder.js
const decoder = (encodedContent) => {
    encodedContent = encodedContent.replace(/[^A-Za-z0-9+/=]/g, '');
    encodedContent = decodeURIComponent(escape(atob(encodedContent)));
    return encodedContent;
  };
  
  // articleData.js
  const articleData = {
    content: '',
    abstract: '',
    keyword: ''
  };
  
  const getdecoder = (parsedData) => {
    try {
      parsedData = JSON.parse(parsedData); // 如果是字串，轉換為 JSON 物件

      articleData.content = decoder(parsedData.content);
      articleData.abstract = decoder(parsedData.abstract);
      articleData.keyword = decoder(parsedData.keyword);
  
      return articleData;
  
    } catch (error) {
      console.error('JSON 解析失敗或 Base64 解碼失敗:', error);
      return null;
    }
  };
  
  // 將方法與資料導出
  module.exports = {
    decoder,
    getdecoder,
    articleData
  };
  