import React, { useState } from "react";
import triangleIcon from "../../../icons/triangle_icon.png";

const faqArticles = [
  { id: 1, title: "Why payouts were not generated for some promoters?" },
  {
    id: 2,
    title:
      "How to use your own email sending domain (and personalize the FROM address) and a custom SMTP server?",
  },
  { id: 3, title: "How to suspend or ban a promoter?" },
  {
    id: 4,
    title:
      "Can FirstPromoter send newsletter or announcement  emails to promoters?",
  },
  {
    id: 5,
    title:
      "How to embed the promoter dashboard inside your website and log your users in automatically",
  },
  { id: 6, title: "Do you have a test/sandbox mode?" },
  {
    id: 7,
    title:
      "How to use your own domain for the promoter dashboard and sign-up page?",
  },
  {
    id: 8,
    title:
      "How to assign landing page URLs to affiliates and avoid using links with referral ids(direct url tracking)?",
  },
  { id: 9, title: "How to create leads manually?" },
  {
    id: 10,
    title:
      "How to track sales using coupon codes instead of using a referral link?",
  },
  {
    id: 11,
    title:
      "How to set custom offers and rewards for each promoter individually?",
  },
  {
    id: 12,
    title:
      "How to embed promoter dashboard and sign-up page into your website?",
  },
  { id: 13, title: "How to add rewards/commissions manually?" },
  {
    id: 14,
    title: "How does FirstPromoter track affiliate sales (SaaS version)?",
  },
  {
    id: 15,
    title:
      "How to set up custom rewards like credits, points, free months, etc",
  },
];
const webhooksArticles = [
  { id: 1, title: "Promoter Accepted (promoter_accepted) webhook" },
  { id: 2, title: "New Signup (lead_signup) webhook" },
  { id: 3, title: "Fulfilment Pending (fulfilment_pending) webhook" },
];
const gettingStartedArticle = [
  { id: 1, title: "Working with multiple campaigns" },
  { id: 2, title: "What are Campaigns?" },
  { id: 3, title: "What are Promotions?" },
];
const payoutsAndFulfilmentsArticles = [
  { id: 1, title: "How invoices are generated" },
  { id: 2, title: "Payouts invoicing guide for EU companies" },
  { id: 3, title: "Common Paypal Payouts errors" },
  { id: 4, title: "How to configure Paypal Payouts" },
  { id: 5, title: "How payouts work" },
  { id: 6, title: "How to pay your promoters" },
];

const campaignArticles = [
  { id: 1, title: "Moving promoters from one campaign to another" },
  { id: 2, title: "Inviting promoters to join a campaign" },
];
const othersArticle = [
  { id: 1, title: "User roles" },
  { id: 2, title: "Managing affiliate agreements" },
];
const rewardsAndCommissionsArticles = [
  { id: 1, title: "How to limit recurring commissions to 12 months?" },
  { id: 2, title: "How to set up a multi-level rewards scheme?" },
  { id: 3, title: "How to set up multi-tiered commissions (MLM)?" },
  { id: 4, title: "Recurring Commissions and Monetary Rewards" },
  {
    id: 5,
    title:
      "How to set up custom rewards like credits, points, free months, etc",
  },
  { id: 6, title: "How to set different rewards based on the plan id?" },
];
const reportingArticles = [
  { id: 1, title: "Reports fields explained" },
  { id: 2, title: "Reports overview" },
];

const integrationsArticles = [
  { id: 1, title: "Stripe Checkout integration" },
  { id: 2, title: "How to integrate ClickFunnels with FirstPromoter?" },
  { id: 3, title: "Integrate FirstPromoter with Zapier" },
  { id: 4, title: "Tracking API" },
  { id: 5, title: "API integration" },
  {
    id: 6,
    title:
      "Integration guide for Shopify App owners (only non-iframe iframe apps supported)",
  },
  { id: 7, title: "How to integrate Recurly with FirstPromoter?" },
  { id: 8, title: "How to integrate Braintree with FirstPromoter?" },
  { id: 9, title: "How to integrate Chargebee with FirstPromoter?" },
];

const FullfilmentHelpAndSupport = () => {
  const helpArticles = [
    { id: 1, articleType: "FAQ", articles: faqArticles },
    { id: 2, articleType: "Webhooks", articles: webhooksArticles },
    { id: 3, articleType: "Getting Started", articles: gettingStartedArticle },
    {
      id: 4,
      articleType: "Payouts & Fulfilments",
      articles: payoutsAndFulfilmentsArticles,
    },
    { id: 5, articleType: "Campaigns", articles: campaignArticles },
    { id: 6, articleType: "Others", articles: othersArticle },
    {
      id: 7,
      articleType: "Rewards & Commissions",
      articles: rewardsAndCommissionsArticles,
    },
    { id: 8, articleType: "Reporting", articles: reportingArticles },
    { id: 9, articleType: "Integrations", articles: integrationsArticles },
  ];

  const [isOpen, setIsOpen] = useState([]);

  const handleArticleOpen = (id) => {
    if (isOpen.find((d) => d === id)) {
      const filtered = isOpen.filter((d) => d !== id);
      setIsOpen(filtered);
    } else {
      const newArray = [...isOpen];
      newArray.push(id);
      setIsOpen(newArray);
    }
    // if (isOpen.find((d) => d === id)) {
    //   setIsOpen([]);
    // } else {
    //   setIsOpen([id]);
    // }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        Help and Support
      </h1>
      {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {helpArticles.map((article) => (
          <ArticlesDiv
            article={article}
            isOpen={isOpen}
            handleArticleOpen={handleArticleOpen}
          />
        ))}
      </div> */}
      <div className="md:flex gap-10">
        <div className="md:w-1/2 w-full">
          {helpArticles.slice(0, 5).map((article) => (
            <ArticlesDiv
              key={article.id}
              article={article}
              isOpen={isOpen}
              handleArticleOpen={handleArticleOpen}
            />
          ))}
        </div>
        <div className="md:w-1/2 w-full">
          {helpArticles.slice(5).map((article) => (
            <ArticlesDiv
              key={article.id}
              article={article}
              isOpen={isOpen}
              handleArticleOpen={handleArticleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullfilmentHelpAndSupport;

const ArticlesDiv = ({ article, isOpen, handleArticleOpen }) => {
  return (
    <div className="mb-10">
      <div
        onClick={() => handleArticleOpen(article.id)}
        className="bg-white rounded-lg p-5 flex justify-between items-center cursor-pointer"
      >
        <div>
          <h1 className="text-xl text-secondary font-bold">
            {article.articleType}
          </h1>
          <p className="text-primary">
            {article.articles.length} articles in this collection
          </p>
        </div>
        <button>
          <img width={20} src={triangleIcon} alt="" />
        </button>
      </div>
      {isOpen.find((d) => d === article.id) && (
        <div className="row-auto bg-white mt-5 rounded-md p-5 ml-5 text-accent">
          {article.articles.map((a, i) => (
            <h1
              key={a.id}
              className={`py-3 ${
                article.articles.length !== i + 1 && "border-b-2"
              }`}
            >
              {a.title}
            </h1>
          ))}
        </div>
      )}

      {/* <div
    className={`${
      isOpen.find((d) => d === article.id)
        ? "opacity-1 h-full"
        : "opacity-0 h-0 -mt-8"
    } bg-white mt-5 rounded-md p-5 ml-5 text-accent duration-200`}
  >
    {article.articles.map((a, i) => (
      <h1
        key={a.id}
        className={`py-3 ${
          article.articles.length !== i + 1 && "border-b-2"
        }`}
      >
        {a.title}
      </h1>
    ))}
  </div> */}
    </div>
  );
};
