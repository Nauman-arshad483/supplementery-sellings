import { Route, Routes } from "react-router-dom";
import Affiliate from "./pages/Dashboard/Affiliate/Affiliate";
import AffiliateDashboard from "./pages/Dashboard/Affiliate/AffiliateDashboard/AffiliateDashboard";
import AffiliateProfile from "./pages/Dashboard/Affiliate/AffiliateProfile/AffiliateProfile";
import SetupInstructions from "./pages/Dashboard/Affiliate/AffiliateProfile/SetupInstructions";
import ViewIntegrations from "./pages/Dashboard/Affiliate/AffiliateProfile/ViewIntegrations";
import AffiliateCampaigns from "./pages/Dashboard/Affiliate/Campaigns/AffiliateCampaigns";
import EditCampaigns from "./pages/Dashboard/Affiliate/Campaigns/EditCampaigns";
import InvitePromoters from "./pages/Dashboard/Affiliate/Campaigns/InvitePromoters";
import Leads from "./pages/Dashboard/Affiliate/Leads/Leads";
import EditPayout from "./pages/Dashboard/Affiliate/Payouts/EditPayout";
import NonMonetary from "./pages/Dashboard/Affiliate/Payouts/NonMonetary";
import Payouts from "./pages/Dashboard/Affiliate/Payouts/Payouts";
import ViewAllPayouts from "./pages/Dashboard/Affiliate/Payouts/ViewAllPayouts";
import AffiliatePromoters from "./pages/Dashboard/Affiliate/Promoters/AffiliatePromoters";
import EditPromoter from "./pages/Dashboard/Affiliate/Promoters/EditPromoter";
import PromoterDetails from "./pages/Dashboard/Affiliate/Promoters/PromoterDetails";
import AddLead from "./pages/Dashboard/Affiliate/Promotions/AddLead";
import EditPromotion from "./pages/Dashboard/Affiliate/Promotions/EditPromotion";
import Promotions from "./pages/Dashboard/Affiliate/Promotions/Promotions";
import RewardsAndCommissions from "./pages/Dashboard/Affiliate/RewardsAndCommissions/RewardsAndCommissions";
import AffiliateManager from "./pages/Dashboard/AffiliateManager/AffiliateManager";
import AffiliateManagerPromoter from "./pages/Dashboard/AffiliateManager/AffiliateManagerPromoter";

import Chat from "./pages/Dashboard/CustomerService/Chat";
import CustomerService from "./pages/Dashboard/CustomerService/CustomerService";
import HelpAndSupport from "./pages/Dashboard/CustomerService/HelpAndSupport";
import MyProfile from "./pages/Dashboard/CustomerService/MyProfile";
import Fullfilment from "./pages/Dashboard/Fullfilment/Fullfilment";
import FullfilmentChat from "./pages/Dashboard/Fullfilment/FullfilmentChat";
import FullfilmentHelpAndSupport from "./pages/Dashboard/Fullfilment/FullfilmentHelpAndSupport";
import FullfilmentProfile from "./pages/Dashboard/Fullfilment/FullfilmentProfile";
import FullfilmentLabel from "./pages/Dashboard/Fullfilment/Labels/FullfilmentLabel";
import FullfilmentLogos from "./pages/Dashboard/Fullfilment/Logos/FullfilmentLogos";
import Products from "./pages/Dashboard/Fullfilment/Products/Products";
import DesignerHelpAndSupport from "./pages/Dashboard/GraphicsDesigner/DesignerHelpAndSupport";
import DesignerMessage from "./pages/Dashboard/GraphicsDesigner/DesignerMessage";
import DesignerProfile from "./pages/Dashboard/GraphicsDesigner/DesignerProfile";
import DesignerEarnings from "./pages/Dashboard/GraphicsDesigner/Earnings/DesignerEarnings";
import GraphicsDesigner from "./pages/Dashboard/GraphicsDesigner/GraphicsDesigner";
import DesignerHome from "./pages/Dashboard/GraphicsDesigner/Home/DesignerHome";
import AssignClient from "./pages/Dashboard/GraphicsDesigner/MyClients/AssignClient";
import MyClients from "./pages/Dashboard/GraphicsDesigner/MyClients/MyClients";
import MerchantAnalytics from "./pages/Dashboard/MerchantProcessor/Analytics/MerchantAnalytics";
import SingleClientAnalytics from "./pages/Dashboard/MerchantProcessor/Analytics/SingleClientAnalytics";
import SingleStoreAnalytics from "./pages/Dashboard/MerchantProcessor/Analytics/SingleStoreAnalytics";
import Credentials from "./pages/Dashboard/MerchantProcessor/Credentials/Credentials";
import MerchantForms from "./pages/Dashboard/MerchantProcessor/Forms/MerchantForms";
import ViewFormsClient from "./pages/Dashboard/MerchantProcessor/Forms/ViewFormsClient";

import MerchantProcessor from "./pages/Dashboard/MerchantProcessor/MerchantProcessor";
import ProductCatalog from "./pages/Dashboard/MerchantProcessor/ProductCatalog/ProductCatalog";
import MyVoip from "./pages/Dashboard/MyVoip/MyVoip";
import TicketingSystem from "./pages/Dashboard/MyVoip/TicketingSystem/TicketingSystem";
import TrainingLibrary from "./pages/Dashboard/MyVoip/TrainingLibrary/TrainingLibrary";
import VoipAnalytics from "./pages/Dashboard/MyVoip/VoipAnalytics/VoipAnalytics";
import VoipChat from "./pages/Dashboard/MyVoip/VoipChat";
import BusinessSetting from "./pages/Dashboard/UserStoreOwner/BusinessSetting/BusinessSetting";
import OwnerCatalog from "./pages/Dashboard/UserStoreOwner/Catalog/OwnerCatalog";
import DesignStudio from "./pages/Dashboard/UserStoreOwner/DesignStudio/DesignStudio";
import LabelSection from "./pages/Dashboard/UserStoreOwner/DesignStudio/Labels/LabelSection";
import LogoSection from "./pages/Dashboard/UserStoreOwner/DesignStudio/Logo/LogoSection";
import MockupGenerator from "./pages/Dashboard/UserStoreOwner/DesignStudio/MockupGenerator/MockupGenerator";
import More from "./pages/Dashboard/UserStoreOwner/DesignStudio/More/More";
import WebsiteTemplates from "./pages/Dashboard/UserStoreOwner/DesignStudio/WebSiteTemplates/WebsiteTemplates";
import RequestDetails from "./pages/Dashboard/UserStoreOwner/DesignStudio/YourRequest/RequestDetails";
import YourRequest from "./pages/Dashboard/UserStoreOwner/DesignStudio/YourRequest/YourRequest";
import Domain from "./pages/Dashboard/UserStoreOwner/Domain/Domain";
import GoLive from "./pages/Dashboard/UserStoreOwner/GoLive/GoLive";
import StoreOwnerHome from "./pages/Dashboard/UserStoreOwner/Home/StoreOwnerHome";
import Merchant from "./pages/Dashboard/UserStoreOwner/Merchant/Merchant";
import StoreOwnerAnalytics from "./pages/Dashboard/UserStoreOwner/StoreOwnerAnalytics";
import StoreOwnerProfile from "./pages/Dashboard/UserStoreOwner/StoreOwnerProfile";
import AllStores from "./pages/Dashboard/UserStoreOwner/Stores/AllStores/AllStores";

import ManagerCampaigns from "./pages/Dashboard/AffiliateManager/ManagerCampaigns/ManagerCampaigns";
import ManagerDashboard from "./pages/Dashboard/AffiliateManager/ManagerDashboard/ManagerDashboard";
import ManagerPayouts from "./pages/Dashboard/AffiliateManager/ManagerPayouts/ManagerPayouts";
import ManagerViewAllPayouts from "./pages/Dashboard/AffiliateManager/ManagerPayouts/ManagerViewAllPayouts";
import ManagerPromotions from "./pages/Dashboard/AffiliateManager/ManagerPromotions/ManagerPromotions";
import StoreOwnerChat from "./pages/Dashboard/UserStoreOwner/StoreOwnerChat";
import MyStores from "./pages/Dashboard/UserStoreOwner/Stores/MyStores";
import MyStoresSetting from "./pages/Dashboard/UserStoreOwner/Stores/MyStoresSetting";
import UserStoreOwner from "./pages/Dashboard/UserStoreOwner/UserStoreOwner";
import Login from "./pages/Login/Login";
import { Provider } from 'react-redux';
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Login />} >
          </Route>

          {customerServiceRoutes}
          {fullfilmentRoutes}
          {affiliateRoutes}
          {affiliateManagerRoutes}
          {merchantProcessorRoutes}
          {GraphicsDesignerRoutes}
          {storeOwnerRoutes}
          {VoIPRoutes}
        </Routes>
      </div>
    </Provider>
  );
}
const customerServiceRoutes = (
  <Route path="/customer-service" element={<CustomerService />}>
    <Route index element={<Chat />} />
    <Route path="/customer-service/chat" element={<Chat />} />
    <Route
      path="/customer-service/help-and-support"
      element={<HelpAndSupport />}
    />
    <Route path="/customer-service/my-profile" element={<MyProfile />} />
  </Route>)
const fullfilmentRoutes = (
  <Route path="/fullfilment" element={<Fullfilment />}>
    <Route path="/fullfilment/chat" element={<FullfilmentChat />} />
    <Route path="/fullfilment/labels" element={<FullfilmentLabel />} />
    <Route path="/fullfilment/logos" element={<FullfilmentLogos />} />
    <Route path="/fullfilment/products" element={<Products />} />
    <Route
      path="help-and-support"
      element={<FullfilmentHelpAndSupport />}
    />
    <Route path="my-profile" element={<FullfilmentProfile />} />
  </Route>)
const affiliateRoutes = (
  <Route path="/affiliate" element={<Affiliate />}>
    <Route path="/affiliate/dashboard" element={<AffiliateDashboard />} />
    <Route path="/affiliate/campaigns" element={<AffiliateCampaigns />} />
    <Route
      path="/affiliate/campaigns/edit-campaigns"
      element={<EditCampaigns />}
    />
    <Route
      path="/affiliate/campaigns/:action"
      element={<InvitePromoters />}
    />
    <Route path="/affiliate/promoters" element={<AffiliatePromoters />} />
    <Route
      path="/affiliate/promoters/view-details"
      element={<PromoterDetails />}
    />
    <Route
      path="/affiliate/promoters/edit-promoter"
      element={<EditPromoter />}
    />
    <Route path="/affiliate/promotions" element={<Promotions />} />
    <Route
      path="/affiliate/promotions/edit-promotion"
      element={<EditPromotion />}
    />
    <Route path="/affiliate/promotions/add-lead" element={<AddLead />} />
    <Route path="/affiliate/leads" element={<Leads />} />
    <Route
      path="/affiliate/rewards"
      element={<RewardsAndCommissions />}
    />
    <Route path="/affiliate/payouts" element={<Payouts />} />
    <Route
      path="/affiliate/payouts/view-all"
      element={<ViewAllPayouts />}
    />
    <Route
      path="/affiliate/payouts/view-all/edit"
      element={<EditPayout />}
    />
    <Route
      path="/affiliate/payouts/non-monetary"
      element={<NonMonetary />}
    />
    <Route
      path="help-and-support"
      element={<FullfilmentHelpAndSupport />}
    />
    <Route path="my-profile" element={<AffiliateProfile />} />
    <Route
      path="my-profile/view-integrations"
      element={<ViewIntegrations />}
    />
    <Route
      path="my-profile/setup-instructions"
      element={<SetupInstructions />}
    />
  </Route>
)
const affiliateManagerRoutes = (<Route path="/affiliate-manager" element={<AffiliateManager />}>
  <Route
    path="/affiliate-manager/dashboard"
    element={<ManagerDashboard />}
  />
  <Route
    path="/affiliate-manager/campaigns"
    element={<ManagerCampaigns />}
  />
  <Route
    path="/affiliate-manager/campaigns/edit-campaigns"
    element={<EditCampaigns />}
  />
  <Route
    path="/affiliate-manager/campaigns/:action"
    element={<InvitePromoters />}
  />
  <Route
    path="/affiliate-manager/promoters"
    element={<AffiliateManagerPromoter />}
  />
  <Route
    path="/affiliate-manager/promoters/view-details"
    element={<PromoterDetails />}
  />
  <Route
    path="/affiliate-manager/promoters/edit-promoter"
    element={<EditPromoter />}
  />
  <Route
    path="/affiliate-manager/promotions"
    element={<ManagerPromotions />}
  />
  <Route
    path="/affiliate-manager/promotions/edit-promotion"
    element={<EditPromotion />}
  />
  <Route
    path="/affiliate-manager/promotions/add-lead"
    element={<AddLead />}
  />
  <Route path="/affiliate-manager/leads" element={<Leads />} />
  <Route
    path="/affiliate-manager/rewards"
    element={<RewardsAndCommissions />}
  />
  <Route
    path="/affiliate-manager/payouts"
    element={<ManagerPayouts />}
  />
  <Route
    path="/affiliate-manager/payouts/view-all"
    element={<ManagerViewAllPayouts />}
  />
  <Route
    path="/affiliate-manager/payouts/view-all/edit"
    element={<EditPayout />}
  />
  <Route
    path="/affiliate-manager/payouts/non-monetary"
    element={<NonMonetary />}
  />
  <Route
    path="help-and-support"
    element={<FullfilmentHelpAndSupport />}
  />
  <Route path="my-profile" element={<AffiliateProfile />} />
  <Route
    path="my-profile/view-integrations"
    element={<ViewIntegrations />}
  />
  <Route
    path="my-profile/setup-instructions"
    element={<SetupInstructions />}
  />
</Route>)
const merchantProcessorRoutes = (<Route path="/merchant-processor" element={<MerchantProcessor />}>
  <Route path="/merchant-processor/forms" element={<MerchantForms />} />
  <Route
    path="/merchant-processor/forms/client-view"
    element={<ViewFormsClient />}
  />
  <Route
    path="/merchant-processor/chat"
    element={<FullfilmentChat />}
  />
  <Route
    path="/merchant-processor/analytics"
    element={<MerchantAnalytics />}
  />
  <Route
    path="/merchant-processor/analytics/store-analytics"
    element={<SingleStoreAnalytics />}
  />
  <Route
    path="/merchant-processor/analytics/client-analytics"
    element={<SingleClientAnalytics />}
  />
  <Route
    path="/merchant-processor/credentials"
    element={<Credentials />}
  />
  <Route
    path="/merchant-processor/product-catalog"
    element={<ProductCatalog />}
  />
  <Route
    path="help-and-support"
    element={<FullfilmentHelpAndSupport />}
  />
  <Route path="my-profile" element={<FullfilmentProfile />} />
</Route>)
const GraphicsDesignerRoutes = (
  <Route path="/graphic-designer" element={<GraphicsDesigner />}>
    <Route path="/graphic-designer/home" element={<DesignerHome />} />
    <Route path="/graphic-designer/clients" element={<MyClients />} />
    <Route
      path="/graphic-designer/clients/assign"
      element={<AssignClient />}
    />
    <Route
      path="/graphic-designer/earnings"
      element={<DesignerEarnings />}
    />
    <Route path="/graphic-designer/chat" element={<DesignerMessage />} />
    <Route path="help-and-support" element={<DesignerHelpAndSupport />} />
    <Route path="my-profile" element={<DesignerProfile />} />
  </Route>)
const storeOwnerRoutes = (
  <Route path="/store-owner" element={<UserStoreOwner />}>
    <Route path="/store-owner/home" element={<StoreOwnerHome />} />
    <Route path="/store-owner/domain" element={<Domain />} />
    <Route path="/store-owner/business-setting" element={<BusinessSetting />} />
    <Route path="/store-owner/catalog" element={<OwnerCatalog />} />
    <Route path="/store-owner/design-studio" element={<DesignStudio />}>
      <Route index element={<LogoSection />} />
      <Route path="labels" element={<LabelSection />} />
      <Route path="website-templates" element={<WebsiteTemplates />} />
      <Route path="mockup-generator" element={<MockupGenerator />} />
      <Route path="more" element={<More />} />
    </Route>
    <Route
      path="/store-owner/design-studio/request"
      element={<YourRequest />}
    />
    <Route
      path="/store-owner/design-studio/request/view"
      element={<RequestDetails />}
    />
    <Route path="/store-owner/stores/" element={<MyStores />}>
      <Route index element={<AllStores />} />
      <Route path="setting" element={<MyStoresSetting />} />
    </Route>
    <Route path="/store-owner/merchant" element={<Merchant />} />
    <Route path="/store-owner/analytics" element={<StoreOwnerAnalytics />} />
    <Route path="/store-owner/go-live" element={<GoLive />} />
    <Route path="help-and-support" element={<DesignerHelpAndSupport />} />
    <Route path="my-profile" element={<StoreOwnerProfile />} />
    <Route path="chat" element={<StoreOwnerChat />} />
  </Route>
);

const VoIPRoutes = (
  <Route path="/voip" element={<MyVoip />}>
    <Route path="chat" element={<VoipChat />} />
    <Route path="analytics" element={<VoipAnalytics />} />
    <Route path="ticketing-system" element={<TicketingSystem />} />
    <Route path="training-library" element={<TrainingLibrary />} />
    <Route path="help-and-support" element={<DesignerHelpAndSupport />} />
    <Route path="my-profile" element={<FullfilmentProfile />} />
  </Route>
);

export default App;
