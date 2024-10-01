import {
  reactExtension,
  useApi,
  useApplyAttributeChange,
  BlockStack,
  Button,
  Heading,
  Text,
} from "@shopify/ui-extensions-react/checkout";
import { useState } from "react";

export default reactExtension("purchase.checkout.payment-method-list.render-before", () => (
  <Extension />
));

function Extension() {
  const { extension } = useApi();
  const applyAttributeChange = useApplyAttributeChange();
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelection = async (method) => {
    setSelectedPayment(method);

    try {
      const result = await applyAttributeChange({
        key: "payment_method",
        type: "updateAttribute",
        value: method,
      });
      if (result.success) {
        console.log(`Payment method '${method}' selected, checkout updated.`);
      } else {
        throw new Error(result.message || "Failed to update payment method.");
      }
    } catch (error) {
      console.error("Error updating checkout with COD:", error);
      alert("Sorry, we couldn't update the payment method. Please try again.");
    }
  };

  return (
    <BlockStack spacing="loose">


    </BlockStack>
  );
}
