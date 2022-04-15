import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useStateContext } from "./useStateContext";
import { useAppActions } from "./useAppActions";

const usePaymentIntegration = () => {
  const { currentUser } = useAuthContext();
  const { state } = useStateContext();
  const { getTotalCartPrice } = useAppActions();

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const paymentSuccessful = (razorpayRes) => {
    console.log(razorpayRes.razorpay_payment_id);
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("ERROR OCCURRED: check your internet connection");
    }

    const options = {
      key: process.env.REACT_APP_RZP_KEY,
      amount: `${getTotalCartPrice(state.cartData) * 100}`,
      currency: "INR",
      name: "novee",
      description: "Thank you for buying from the best.",
      image:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649076577/ecommerce/logo_sr3h5w.webp",
      handler: function (response) {
        paymentSuccessful(response);
      },
      prefill: {
        name: `${currentUser.firstName}`,
        email: `${currentUser.email}`,
        contact: "6396653091",
      },
      theme: {
        color: "#0553f0",
      },
      notes: {
        address: `Deliver to person name Kotdwara Uttarakhand 246124`,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      toast.error("Something went wrong! Please try again later");
    });
    paymentObject.open();
  };

  return {
    paymentSuccessful,
    displayRazorpay,
    loadScript,
  };
};

export { usePaymentIntegration };
