"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import HeroButton from "../ui/HeroButton";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  isPopular?: boolean;
  features: PricingFeature[];
}

interface PricingTableProps {
  tiers?: PricingTier[];
  darkMode?: boolean;
}

const defaultTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "month",
    description: "Great for trying out Finament and for tiny teams",
    buttonText: "Start for Free",
    buttonVariant: "outline",
    features: [
      { name: "Account Aggregation", included: true },
      { name: "Expense Tracking", included: true },
      { name: "Budgeting Tools", included: true },
      { name: "Transaction Insights", included: true },
      { name: "Basic Security", included: true },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 98,
    period: "month",
    description: "Best for growing startups and growth companies",
    buttonText: "Sign Up with Professional",
    buttonVariant: "primary",
    isPopular: true,
    features: [
      { name: "Everything in Free", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "Advanced Budgeting", included: true },
      { name: "Investment Tracking", included: true },
      { name: "Enhanced Security", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 160,
    period: "month",
    description: "Best for large companies and teams requiring high security",
    buttonText: "Sign Up with Enterprise",
    buttonVariant: "secondary",
    features: [
      { name: "Financial Planning Tools", included: true },
      { name: "Priority Support", included: true },
      { name: "Premium Widgets", included: true },
      { name: "Advanced Security", included: true },
      { name: "Integration with 3rd-Party Services", included: true },
    ],
  },
];

const PricingTable: React.FC<PricingTableProps> = ({
  tiers = defaultTiers,
}) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="min-h-screen  text-gray-900 p-8 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Select the perfect plan for your financial management needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 relative transition-all duration-300 hover:shadow-xl overflow-visible dark:bg-gray-800 dark:border-gray-700"
            >
              {tier.isPopular && (
                <div className="absolute top-8 right-8">
                  <button className="bg-[#212121] text-white py-1 px-3 rounded-full  text-xs border border-gray-200 font-">
                    Most Popular
                  </button>
                </div>
              )}
              {/* Header */}
              <div className="bg-white border border-gray-200  rounded-lg p-4 dark:bg-gray-800 mt-auto" >
                <div className="text-left mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {formatPrice(tier.price)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      /{tier.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tier.description}
                  </p>
                </div>

                {/* CTA Button */}
                {/* <button className={getButtonClasses(tier.buttonVariant)}>
                {tier.buttonText}
              </button> */}
                <PrimaryButton
                  variant="navbar"
                  onClick={console.log}
                  name={tier.buttonText}
                />
              </div>

              {/* Features */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-500 dark:text-gray-400 px-4">
                  Features
                </h4>
                <ul className="space-y-3 px-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          feature.included
                            ? "text-green-500"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feature.included
                            ? ""
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All plans include 24/7 support and a 30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
