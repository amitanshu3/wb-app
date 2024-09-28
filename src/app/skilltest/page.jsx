"use client";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import QuickStatistics from "../../components/QuickStatistics";
import SkillTestCard from "../../components/SkillTestCard";
import ComparisonGraph from "../../components/ComparisonGraph";
import SyllabusWiseAnalysis from "../../components/SyllabusWiseAnalysis";
import QuestionAnalysis from "../../components/QuestionAnalysis";
import { useGlobalState } from "../../context/GlobalState";

export default function SkillTest() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { statistics } = useGlobalState();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Layout>
      <main className="flex-1 pt-20 md:p-6">
        <h1 className="text-2xl font-bold mb-6 max-sm:ml-6">Skill Test</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-6 max-sm:w-[85%] max-sm:mx-auto sm:m-0 w-full md:w-2/3 ">
            <SkillTestCard toggleModal={toggleModal} />
            <QuickStatistics />
            <ComparisonGraph />
          </div>
          <div className="flex flex-col max-sm:w-[80%] max-sm:mx-auto gap-6 w-full md:w-1/3">
            <SyllabusWiseAnalysis />
            <QuestionAnalysis />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={toggleModal}
          currentStatistics={statistics}
        />
      </main>
    </Layout>
  );
}
