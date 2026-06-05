"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Code2,
  ShoppingCart,
  Cloud,
  Layout,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    message: "",
    budget: "",
    name: "",
    email: "",
  });

  const categories = [
    {
      id: "custom-web",
      label: t("categoryCustomWeb"),
      icon: Code2,
    },
    {
      id: "ecommerce",
      label: t("categoryEcommerce"),
      icon: ShoppingCart,
    },
    {
      id: "saas",
      label: t("categorySaas"),
      icon: Cloud,
    },
    {
      id: "landing",
      label: t("categoryLanding"),
      icon: Layout,
    },
  ];

  const budgetRanges = [
    t("budget1"),
    t("budget2"),
    t("budget3"),
    t("budget4"),
  ];

  const stepLabels = [t("stepDetails"), t("stepBudget"), t("stepSubmit")];

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("successAlert"));
  };

  const stepVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="bg-black px-6 lg:px-12 py-24 overflow-hidden">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 justify-center items-center text-center mb-16">
          <span className="font-black tracking-[0.2em] uppercase text-xs text-white">
            {t("getInTouch")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t("heading")}
          </h2>
          <div className="w-16 h-[1px] bg-white my-2" />
          <p className="text-base sm:text-lg max-w-xl text-white">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-4"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black  rounded-2xl shadow-none">
              <CardContent className="flex flex-col gap-8 p-8">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-black uppercase tracking-wider text-white mb-2">
                    {t("agencyContacts")}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {t("contactDirectly")}
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-white" />
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border ">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        {t("email")}
                      </span>
                      <a
                        href="mailto:contact@ambyte-agency.com"
                        className="text-base font-black text-white hover:underline transition-all"
                      >
                        contact@ambyte-agency.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border ">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        {t("phone")}
                      </span>
                      <a
                        href="tel:+213556648005"
                        className="text-base font-black text-white hover:underline transition-all"
                      >
                        +213556648005
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white" />
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    {t("followUs")}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/ambyte-agency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-3 border  rounded-full transition-all hover:bg-white group"
                    >
                      <svg
                        className="w-4 h-4 text-white group-hover:text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/213556648005"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="p-3 border  rounded-full transition-all hover:bg-white group"
                    >
                      <MessageCircle className="h-4 w-4 text-white group-hover:text-black" />
                    </a>
                    <a
                      href="https://www.instagram.com/ambyte.agency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-3 border  rounded-full transition-all hover:bg-white group"
                    >
                      <svg
                        className="w-4 h-4 text-white group-hover:text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61586145290425"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-3 border  rounded-full transition-all hover:bg-white group"
                    >
                      <svg
                        className="w-4 h-4 text-white group-hover:text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black  rounded-2xl shadow-none">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center justify-between mb-8 sm:mb-12 max-w-md mx-auto relative">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white -translate-y-1/2 -z-0" />
                  <div
                    className="absolute top-1/2 left-0 h-[1px] bg-white -translate-y-1/2 -z-0 transition-all duration-500"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  />
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className="relative z-10 flex flex-col items-center gap-1.5"
                    >
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300
                          ${
                            step >= s
                              ? "bg-white text-black border-white"
                              : "bg-black text-white "
                          }
                        `}
                      >
                        {s}
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-wider text-white">
                        {stepLabels[s - 1]}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        variants={stepVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                      >
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-black text-white">
                            {t("step1Title")}
                          </h3>
                          <p className="text-xs font-semibold text-white">
                            {t("step1Desc")}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isSelected = formData.category === cat.id;
                            return (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() =>
                                  setFormData({ ...formData, category: cat.id })
                                }
                                className={`
                                  p-4 rounded-xl border flex flex-col items-center justify-center gap-2.5 transition-all text-center cursor-pointer bg-black
                                  ${
                                    isSelected
                                      ? "bg-white text-black border-white"
                                      : "text-white  hover:bg-white hover:text-black"
                                  }
                                `}
                              >
                                <Icon className="text-xl" />
                                <span className="text-xs font-bold">
                                  {cat.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="flex flex-col gap-1.5 mt-2">
                          <Label className="text-xs font-black uppercase tracking-wider text-white">
                            {t("yourMessage")}
                          </Label>
                          <Textarea
                            name="details"
                            rows={6}
                            required
                            placeholder={t("messagePlaceholder")}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            className="border p-5  bg-black text-white placeholder:text-white/50 focus:ring-0 "
                          />
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="rounded-full bg-white text-black hover:bg-black hover:text-white border  transition-all"
                          >
                            {t("nextStep")}
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        variants={stepVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                      >
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-black text-white">
                            {t("step2Title")}
                          </h3>
                          <p className="text-xs font-semibold text-white">
                            {t("step2Desc")}
                          </p>
                        </div>

                        <RadioGroup
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData({ ...formData, budget: value })
                          }
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {budgetRanges.map((range) => (
                            <div
                              key={range}
                              className="flex items-center space-x-2 border  rounded-lg p-4 transition-all hover:bg-white group"
                            >
                              <RadioGroupItem
                                value={range}
                                id={range}
                                className=" text-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                              />
                              <Label
                                htmlFor={range}
                                className="font-medium text-white group-hover:text-black transition-colors"
                              >
                                {range}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>

                        <div className="flex flex-col gap-1.5 mt-2">
                          <Label className="text-xs font-black uppercase tracking-wider text-white">
                            {t("yourName")}
                          </Label>
                          <Input
                            placeholder={t("namePlaceholder")}
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="border p-5  bg-black text-white placeholder:text-white/50 focus:ring-0 focus:border-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <Label className="text-xs font-black uppercase tracking-wider text-white">
                            {t("emailAddress")}
                          </Label>
                          <Input
                            type="email"
                            placeholder={t("emailPlaceholder")}
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="border p-5  bg-black text-white placeholder:text-white/50 focus:ring-0 focus:border-white"
                          />
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="rounded-full border  bg-black text-white hover:bg-white hover:text-black transition-all"
                          >
                            {t("back")}
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="rounded-full bg-white text-black hover:bg-black hover:text-white border  transition-all"
                          >
                            {t("nextStep")}
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        variants={stepVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                      >
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-black text-white">
                            Almost There!
                          </h3>
                          <p className="text-sm text-white/70">
                            Please review your information before sending
                          </p>
                        </div>
                    
                        <Card className="bg-black border-white/20 shadow-none">
                          <CardContent className="p-0">
                            <div className="divide-y divide-white/10">
                              <div className="flex items-start justify-between p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white/60">1</span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-white/50 uppercase tracking-wider">
                                      {t("category")}
                                    </p>
                                    <p className="text-sm font-semibold text-white mt-0.5">
                                      {categories.find((c) => c.id === formData.category)?.label || t("notSelected")}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant={"outline"}
                                  onClick={() => setStep(2)}
                                >
                                  edit
                                </Button>
                              </div>
                    
                              <div className="flex items-start justify-between p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white/60">2</span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-white/50 uppercase tracking-wider">
                                      {t("message")}
                                    </p>
                                    <p className="text-sm text-white/90 mt-0.5 line-clamp-2">
                                      {formData.message.length > 80
                                        ? `${formData.message.substring(0, 80)}...`
                                        : formData.message || "—"}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant={"outline"}
                                  onClick={() => setStep(2)}
                                >
                                  edit
                                </Button>
                              </div>
                    
                              <div className="flex items-start justify-between p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white/60">3</span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-white/50 uppercase tracking-wider">
                                      {t("budget")}
                                    </p>
                                    <p className="text-sm font-semibold text-white mt-0.5">
                                      {formData.budget || t("notSpecified")}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant={"outline"}
                                  onClick={() => setStep(2)}
                                >
                                  edit
                                </Button>
                              </div>
                    
                              <div className="flex items-start justify-between p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white/60">4</span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-white/50 uppercase tracking-wider">
                                      {t("name")}
                                    </p>
                                    <p className="text-sm font-semibold text-white mt-0.5">
                                      {formData.name || "—"}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant={"outline"}
                                  onClick={() => setStep(2)}
                                >
                                  edit
                                </Button>
                              </div>
                    
                              <div className="flex items-start justify-between p-4 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white/60">5</span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-white/50 uppercase tracking-wider">
                                      {t("email")}
                                    </p>
                                    <p className="text-sm font-semibold text-white mt-0.5 break-all">
                                      {formData.email || "—"}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant={"outline"}
                                  onClick={() => setStep(2)}
                                >
                                  edit
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                    
                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="rounded-full border-white/20 bg-black text-white hover:bg-white hover:text-black transition-all"
                          >
                            {t("back")}
                          </Button>
                          <Button
                            type="submit"
                            className="rounded-full bg-white text-black hover:bg-white/90 transition-all"
                          >
                            {t("sendMessage")}
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
