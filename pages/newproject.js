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
        <Card className='w-[40%] h-[800px] shadow-lg'>
          <p className='m-4 font-semibold text-xl'>Project Overview</p>

          {/* Input fields and headers */}
          <div className='m-4'>
            <label
              htmlFor='title'
              className='block text-sm font-medium text-gray-700'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className='mt-1 p-2 w-[700px] border border-gray-300 rounded-md'
              placeholder='Max. 150 Characters'
            />
          </div>

          <div className='m-4'>
            <label
              htmlFor='description'
              className='block  text-sm font-medium text-gray-700'
            >
              Description
            </label>
            <textarea
              id='description'
              rows='4'
              className='mt-1 w-[700px] p-2 border border-gray-300 rounded-md '
              placeholder='Max. 300 Characters'
            ></textarea>
          </div>

          <div className='m-4'>
            <label
              htmlFor='projectSlug'
              className='block text-sm font-medium text-gray-700'
            >
              Project Slug
            </label>
            <input
              type='text'
              id='projectSlug'
              className='mt-1 p-2 w-[700px] border border-gray-300 rounded-md '
            />
          </div>

          <label
            htmlFor='activechallenge'
            className='block text-sm ml-4 mt-4 font-medium text-gray-700'
          >
            Active Challenge
          </label>
          <select
            id='activechallenge'
            name='activechallenge'
            className='border border-gray-300 p-4 mb-4 mt-2 ml-4 rounded-md text-black'
          >
            <option value=''>Select Challenge</option>
            <option value='Full Stack Developer Challenge 1: Web Development'>
              Full Stack Developer Challenge 1: Web Development
            </option>
            <option value='Full Stack Developer Challenge 2: Browser'>
              Full Stack Developer Challenge 2: Browser
            </option>
            <option value='Full Stack Developer Challenge 3: Server'>
              Full Stack Developer Challenge 3: Server
            </option>
            <option value='Facilitator'>
              Full Stack Developer Challenge 4: Database
            </option>
          </select>

          <label
            htmlFor='associatedLab'
            className='block text-sm ml-4 mt-4 font-medium text-gray-700'
          >
            Associated Lab
          </label>
          <select
            id='associatedLab'
            name='associatedLab'
            className='border border-gray-300 p-4 mb-4 mt-2 ml-4 rounded-md text-black'
          >
            <option value=''>Select Lab</option>
            <option value='Full Stack Developer Challenge 1: Web Development'>
              Industry Future Challenge 2023 Lab
            </option>
            <option value='Full Stack Developer Challenge 2: Browser'>
              Web Developer
            </option>
            <option value='Full Stack Developer Challenge 3: Server'>
              Career Planning
            </option>
            <option value='Facilitator'>Full Stack Developer</option>
            {/* Add Lab options here */}
          </select>

          {/* Image Upload */}
          <div className='m-4'>
            <label
              htmlFor='imageUpload'
              className='block text-sm font-medium text-gray-700'
            >
              Upload Project Banner
            </label>
            <input
              type='file'
              id='imageUpload'
              accept='image/*'
              className='mt-1 p-2 border border-gray-300 rounded-md'
            />
          </div>

          <div className='flex justify-between mx-4 my-4'>
            <div className='flex justify-start'>
              <button
                onClick={() => router.push("/dashboard")}
                className='border border-green-500 flex gap-2 text-green-500 bg-white rounded-md shadow-md p-2 hover:scale-105 transition'
              >
                Cancel
              </button>
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => router.push("/team")}
                className='border flex gap-2 text-gray-700 bg-green-500 rounded-md shadow-md p-2 hover:scale-105 transition'
              >
                Continue
              </button>
            </div>{" "}
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
