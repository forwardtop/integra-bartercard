import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import VideoTutorials from "./pages/VideoTutorials";
import hostedPhoneSystem from "./components/hostedPhoneSystem";
import Equipment from "./components/equipment";
import CallingPlan from "./components/callingPlan";
import OptionalProducts from "./components/optionalProducts";
import Summary from "./components/summary";
import RequestQuote from "./pages/RequestQuote";
import ProductPage from "./pages/ProductPage";
import WatchDemoPage from "./pages/WatchDemoPage";
import ResourcePage from "./pages/ResourcePage";
import SoftPhonePage from "./pages/SoftPhonePage";
import UnifiedCommunicationsPage from "./pages/UnifiedCommunicationsPage";
import TeamCollaborationPage from "./pages/TeamCollaborationPage";
import ContactCentrePage from "./pages/ContactCentrePage";
import CRMContentPage from "./pages/CRMContentPage";
import CallRecordingPage from "./pages/CallRecordingPage";
import HardwarePage from "./pages/HardwarePage";
import SolutionPage from "./pages/SolutionPage";
import WhyPage from "./pages/WhyPage";
import FAQPage from "./pages/FAQPage";
import OrderProcess from "./pages/OrderProcessPage";
import AboutUsPage from "./pages/AboutUsPage";
import BarterCardPage from "./pages/BarterCardPage";
import BusinessCloudPBXPage from "./pages/BusinessCloudPBXPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/thankyou" component={ThankYouPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/barterCard" component={BarterCardPage} />
      <Route path="/videoTutorials" component={VideoTutorials} />
      <Route path="/hostedPhoneSystem" component={hostedPhoneSystem} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/callingPlan" component={CallingPlan} />
      <Route path="/optionalProducts" component={OptionalProducts} />
      <Route path="/summary" component={Summary} />
      <Route path="/request-quote" component={RequestQuote} />
      <Route path="/watchDemo" component={WatchDemoPage} />
      <Route path="/resources" component={ResourcePage} />
      <Route path="/why" component={WhyPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/solution" component={SolutionPage} />
      <Route
        path="/products/business-cloud-pbx"
        component={BusinessCloudPBXPage}
      />
      <Route path="/products/softphone" component={SoftPhonePage} />
      <Route
        path="/products/unifiedCommunications"
        component={UnifiedCommunicationsPage}
      />
      <Route
        path="/products/teamCollaboration"
        component={TeamCollaborationPage}
      />
      <Route path="/products/contactCentre" component={ContactCentrePage} />
      <Route path="/products/crm" component={CRMContentPage} />
      <Route path="/products/callRecording" component={CallRecordingPage} />
      <Route path="/products/hardware" component={HardwarePage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/order-process" component={OrderProcess} />
    </Switch>
  );
};

export default Routes;
