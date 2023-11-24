import React from "react";
import {
  Card,
  Col,
  Grid,
  List,
  ListItem,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LabCard from "@/components/LabCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className='bg-gray-100 h-screen w-full'>
      <Navbar />
      <p className='mt-8 flex justify-center text-2xl font-semibold'>
        New Project
      </p>
      <div className='flex items-center justify-center mt-4'>
        <Card className='w-[20%] h-[450px] shadow-lg'>
          <p className='m-4 font-semibold text-xl'>Building your Team</p>

          <label
            htmlFor='activechallenge'
            className='block text-sm ml-4 mt-4 font-medium text-gray-700'
          >
            Recruiting Status
          </label>
          <select
            id='activechallenge'
            name='activechallenge'
            className='border border-gray-300 p-4 mb-4 mt-2 ml-4 rounded-md text-black'
          >
            <option value=''>Select recruiting status</option>
            <option value='Full Stack Developer Challenge 1: Web Development'>
              Currently recruiting
            </option>
            <option value='Full Stack Developer Challenge 2: Browser'>
              Not currently recruiting
            </option>
          </select>

          {/* Checkbox for Recruiting Status */}
          <div className='flex items-center ml-4'>
            <input
              type='checkbox'
              id='isUrgent'
              name='isUrgent'
              className='mr-2'
            />
            <label
              htmlFor='isUrgent'
              className='text-sm font-medium text-gray-700'
            >
              Create project team chat
            </label>
          </div>

          <label
            htmlFor='associatedLab'
            className='block text-sm ml-4 mt-4 font-medium text-gray-700'
          >
            Required Skills
          </label>
          <select
            id='associatedLab'
            name='associatedLab'
            className='border border-gray-300 p-4 mb-4 mt-2 ml-4 rounded-md text-black'
          >
            <option value=''>Find teammates with these skills</option>
            <option value='Full Stack Developer Challenge 1: Web Development'>
              Windows Domain
            </option>
            <option value='Full Stack Developer Challenge 2: Browser'>
              Windows Desktop Administration
            </option>
            <option value='Full Stack Developer Challenge 3: Server'>
              Windows Embedded
            </option>

            {/* Add Lab options here */}
          </select>
          <div className='flex items-center ml-4'>
            <input type='checkbox' id='viewer' name='viewer' className='mr-2' />
            <label
              htmlFor='viewer'
              className='text-sm font-medium text-gray-700'
            >
              Viewer
            </label>
          </div>

          <div className='flex items-center ml-4'>
            <input
              type='checkbox'
              id='isUrgent'
              name='isUrgent'
              className='mr-2 mt-2'
            />
            <label
              htmlFor='isUrgent'
              className='text-sm font-medium mt-2 text-gray-700'
            >
              Editor
            </label>
          </div>
          <div className='flex justify-between mx-4 my-4'>
            {" "}
            <div className='flex justify-start'>
              <button
                onClick={() => router.push("/newproject")}
                className='border border-green-500 flex gap-2 text-green-500 bg-white rounded-md shadow-md p-2 hover:scale-105 transition'
              >
                Back
              </button>
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => router.push("/dashboard")}
                className='border flex gap-2 text-gray-700 bg-green-500 rounded-md shadow-md p-2 hover:scale-105 transition'
              >
                Create Project
              </button>
            </div>
          </div>
        </Card>
      </div>
      <div className='fixed inset-x-0 bottom-0'>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
