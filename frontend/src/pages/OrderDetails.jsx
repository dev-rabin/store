import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/storeApis";
import Loader from "../components/ui/Loader";

const OrderDetails = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const data = await getOrderById(id);
      setOrder(data.order);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const statusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-600";

      case "cancelled":
        return "bg-red-100 text-red-600";

      case "shipped":
        return "bg-blue-100 text-blue-600";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Order not found
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-500">Order Details</p>

          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-gray-900 mt-2">Order #{order.id}</h1>

            <p className="text-gray-500 mt-1">
              Placed on {new Date(order.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500">Order Status</p>

              <span
                className={`inline-flex items-center mt-2 px-3 py-1 rounded-full text-sm ${statusColor(
                  order.status,
                )}`}
              >
                {order.status}
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500">Payment</p>

              <span
                className={`inline-flex items-center mt-2 px-3 py-1 rounded-full text-sm ${
                  order.payment_status === "paid"
                    ? "bg-green-50 text-green-700"
                    : "bg-orange-50 text-orange-700"
                }`}
              >
                {order.payment_status}
              </span>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-gray-500">Total Amount</p>

              <p className="text-2xl text-gray-900 mt-2">
                ₹{order.total_amount}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-6 mt-6">
          <h2 className="text-lg text-gray-900 mb-4">Payment Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{order.total_amount}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t pt-3 flex justify-between text-gray-900">
              <span>Total</span>
              <span>₹{order.total_amount}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-6 mt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500">Payment</p>

              <h3 className="text-lg text-gray-900 mt-1">
                {order.payment_status === "paid"
                  ? "Payment Completed"
                  : "Awaiting Payment"}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {order.payment_status === "paid"
                  ? "Transaction completed successfully."
                  : "Complete the payment to start order processing."}
              </p>
            </div>

            {order.payment_status !== "paid" ? (
              <button
                className="
          px-6
          py-3
          rounded-2xl
          bg-black
          text-white
          text-sm
          hover:opacity-90
          transition-all
          duration-300
        "
              >
                Pay ₹{order.total_amount}
              </button>
            ) : (
              <div className="px-4 py-2 rounded-xl bg-green-50 text-green-700 text-sm">
                ✓ Paid
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
