module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://rahulgavhar.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    const securetoken = process.env.SECURE_TOKEN;
    const secureemail = process.env.SECURE_EMAIL;
    res.status(200).json({ securetoken, secureemail });
  };
  