import Footer from "@/components/Footer";
import LabCard from "@/components/LabCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
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

const leaderboard = [
  {
    username: "Daniel Crha",
    points: "3568",
    rank: 150,
    achievements: 21,
  },
  {
    username: "Mark Fletcher",
    points: "3082",
    rank: 120,
    achievements: 18,
  },
  {
    username: "Steve Grey",
    points: "2991",
    rank: 110,
    achievements: 15,
  },
  {
    username: "John Books",
    points: "2755",
    rank: 100,
    achievements: 25,
  },
  {
    username: "Ashley Green",
    points: "1352",
    rank: 80,
    achievements: 10,
  },
  {
    username: "James Roberts",
    points: "1223",
    rank: 75,
    achievements: 12,
  },
  {
    username: "Pablo Patterson",
    points: "1217",
    rank: 70,
    achievements: 14,
  },
  {
    username: "Jed Townsend",
    points: "1198",
    rank: 65,
    achievements: 11,
  },
  {
    username: "Aryan Kelly",
    points: "956",
    rank: 60,
    achievements: 8,
  },
  {
    username: "Oliver Nelson",
    points: "900",
    rank: 55,
    achievements: 20,
  },
  {
    username: "Sophie Watson",
    points: "850",
    rank: 50,
    achievements: 7,
  },
  {
    username: "Caleb Carter",
    points: "800",
    rank: 45,
    achievements: 22,
  },
  {
    username: "Ella Johnson",
    points: "750",
    rank: 40,
    achievements: 13,
  },
  {
    username: "Gavin Turner",
    points: "700",
    rank: 35,
    achievements: 9,
  },
  {
    username: "Isabella Parker",
    points: "650",
    rank: 30,
    achievements: 17,
  },
  {
    username: "Liam Foster",
    points: "600",
    rank: 25,
    achievements: 16,
  },
  {
    username: "Ava Mitchell",
    points: "550",
    rank: 20,
    achievements: 19,
  },
  {
    username: "Noah Evans",
    points: "500",
    rank: 18,
    achievements: 5,
  },
  {
    username: "Mia Adams",
    points: "450",
    rank: 15,
    achievements: 23,
  },
  {
    username: "Ethan Murphy",
    points: "400",
    rank: 14,
    achievements: 28,
  },
  {
    username: "Emma Cox",
    points: "350",
    rank: 13,
    achievements: 30,
  },
  {
    username: "Logan Butler",
    points: "300",
    rank: 12,
    achievements: 27,
  },
  {
    username: "Madison Hall",
    points: "250",
    rank: 11,
    achievements: 26,
  },
  {
    username: "Carter Rogers",
    points: "200",
    rank: 10,
    achievements: 24,
  },
  {
    username: "Aria Gray",
    points: "150",
    rank: 30,
    achievements: 6,
  },
  {
    username: "Jackson Lee",
    points: "100",
    rank: 20,
    achievements: 29,
  },
  {
    username: "Scarlett Harris",
    points: "50",
    rank: 15,
    achievements: 5,
  },
  {
    username: "Mason King",
    points: "25",
    rank: 12,
    achievements: 15,
  },
  {
    username: "Grace Adams",
    points: "10",
    rank: 10,
    achievements: 10,
  },
];

const deadlines = [
  {
    challenge: "IFC Live Challenge - Transportation",
    date: "10/05/2023 at 12:00AM",
  },
  {
    challenge: "IFC 2023 - Future of Hospitality",
    date: "10/30/2023 at 12:00AM",
  },
  {
    challenge: "IFC Live Challenge 2023 - Environment",
    date: "11/10/2023 at 12:00AM",
  },
  {
    challenge: "IFC 2023 - Future of Energy",
    date: "11/15/2023 at 12:00AM",
  },
  {
    challenge: "Career Planning 1 - Assess Yourself",
    date: "12/17/2023 at 12:00AM",
  },
  {
    challenge: "IFC Live Challenge - Transportation",
    date: "10/05/2023 at 12:00AM",
  },
  {
    challenge: "IFC 2023 - Future of Hospitality",
    date: "10/30/2023 at 12:00AM",
  },
  {
    challenge: "IFC Live Challenge 2023 - Environment",
    date: "11/10/2023 at 12:00AM",
  },
  {
    challenge: "IFC Live Challenge - Transportation",
    date: "10/05/2023 at 12:00AM",
  },
  {
    challenge: "IFC 2023 - Future of Hospitality",
    date: "10/30/2023 at 12:00AM",
  },
  {
    challenge: "IFC Live Challenge 2023 - Environment",
    date: "11/10/2023 at 12:00AM",
  },
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className='bg-gray-100 h-screen w-full'>
      <Navbar />
      <p className='mt-8 ml-36 text-2xl font-semibold'>User Dashboard</p>
      <div className='flex'>
        <div className='flex ml-36 mt-4'>
          <Card className='bg-white w-[600px] max-h-80'>
            <div className='flex justify-between gap-2'>
              <Text>My Progress</Text>
              <Image
                className='mt-0'
                src='/assets/progress.png'
                width={40}
                height={50}
                alt='trophy'
              />
            </div>
            <p className='mt-8 text-lg font-medium'>Challenges</p>
            <Metric>9%</Metric>
            <ProgressBar value={9} className='mt-2' color='emerald' />
            <p className='mt-8 text-lg font-medium'>Labs</p>
            <Metric>30%</Metric>
            <ProgressBar value={30} className='mt-2' />
          </Card>
          {/* <div className='bg-white border border-gray-300 w-[600px] h-[400px] rounded-lg shadow-xl'></div>
          <div className='bg-white border border-gray-300 w-[600px] h-[400px] rounded-lg shadow-xl'></div>
          <div className='bg-white border border-gray-300 w-[600px] h-[400px] rounded-lg shadow-xl'></div> */}
        </div>

        <Card className='max-w-5xl mt-4 max-h-80 ml-4 overflow-y-auto scrollbar-thin '>
          <div className='flex justify-between gap-2'>
            <Text>Leaderboard</Text>
            <Image
              className='mt-0'
              src='/assets/trophy.png'
              width={30}
              height={50}
              alt='trophy'
            />
          </div>

          <div className='grid grid-cols-4 gap-x-36 gap-y-4'>
            <p className='mt-8 text-lg font-medium'>Username</p>
            <p className='mt-8 text-lg font-medium'>Learning Points</p>
            <p className='mt-8 text-lg font-medium'>Learning Rank</p>
            <p className='mt-8 text-lg font-medium'>Achievements</p>

            {leaderboard.map((item) => (
              <React.Fragment key={item.username}>
                <span className='text-sm'>{item.username}</span>
                <span className='text-sm ml-12'>{item.points}</span>
                <span className='text-sm ml-12'>{item.rank}</span>
                <span className='text-sm ml-12'>{item.achievements}</span>
              </React.Fragment>
            ))}
          </div>
        </Card>
      </div>

      <div className='flex'>
        <Card className='w-[600px] h-[400px] ml-36 mt-4 overflow-y-auto'>
          <Text>Upcoming Challenge Deadlines</Text>
          <div className='mt-4'>
            <List>
              {deadlines.map((item) => (
                <ListItem key={item.challenge}>
                  <span className='text-sm'>{item.challenge}</span>
                  <span className='text-sm ml-12'>{item.date}</span>
                </ListItem>
              ))}
            </List>
          </div>
        </Card>
        <Card className='w-[330px] h-[400px] ml-4 mt-4 overflow-y-auto'>
          <Text>Labs</Text>
          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>Web Developer</p>
            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>144</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/projectpic.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              Front end web developer is responsible for designing coding, and
              modifying web pages using standard HTM...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>Career Planning</p>
            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>469</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/career.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              Planning a career involves several steps, and it’s a process that
              requires self-reflection, re...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold '>Future Challenge 2023 Lab</p>

            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>421</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/future.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              Planning a career involves several steps, and it’s a process that
              requires self-reflection, re...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>Full Stack Developer</p>
            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>154</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/projectpic.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              The modern full stack developer is an experienced generalist who
              can build a minimal viable product...
            </p>
          </div>
        </Card>
        <Card className='w-[330px] h-[400px] ml-4 mt-4 overflow-y-auto'>
          <Text>Challenges</Text>
          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>Business Innovation Challenge</p>
            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>41</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/challenge.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              How might we better support businesses around us? Businesses
              around the world have had to...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>Future of Hospitality</p>
            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>442</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/hosp.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              The conventional hospitality sector is experiencing significant
              changes as a result of the increased adoption..
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold '>Live Challenge - Transportation</p>

            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>300</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/trans.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              What are the social equity implications of transportation policies
              and projects, and how can we ensure...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>Skill-Gap Assessment</p>
            <div className='flex'>
              <Image
                src='/assets/user2.png'
                width={20}
                height={20}
                alt='trophy'
              />
              <p className='text-sm'>45</p>
            </div>
          </div>
          <div className='flex'>
            <Image
              src='/assets/skill.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              How might we better support businesses around us? Businesses
              around the world have had to...
            </p>
          </div>
        </Card>
        <Card className='w-[330px] h-[400px] ml-4 mt-4 overflow-y-auto'>
          <div className='flex justify-between'>
            <Text>Projects</Text>

            <button
              onClick={() => router.push("/newproject")}
              className='border flex gap-2 text-gray-700 bg-green-500 rounded-md shadow-md p-2 hover:scale-105 transition'
            >
              <Image
                src='/assets/add2.png'
                width={20}
                height={20}
                alt='trophy'
                className='mt-0.5'
              />
              New Project
            </button>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>
              Frontend Developer Challenge 3: Dashboard and Project Creation
            </p>
          </div>
          <div className='flex'>
            <Image
              src='/assets/pro1.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              A web dashboard is a reporting interface that allows you to
              monitor your website performan...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold'>
              Frontend Developer Challenge 4: Accessibility Integration
            </p>
          </div>
          <div className='flex'>
            <Image
              src='/assets/pro2.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              The Web is fundamentally designed to work for all people, whatever
              their hardware, software, language, locati...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold '>
              Career Planning 4: Build Your Network
            </p>
          </div>
          <div className='flex'>
            <Image
              src='/assets/pro3.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              To create your own luck, take a proactive approach to connect with
              upper-year students and industry profess...
            </p>
          </div>

          <div className=' flex mt-4 justify-between'>
            <p className='font-semibold '>
              Career Planning 2: Explore Career Options
            </p>
          </div>
          <div className='flex'>
            <Image
              src='/assets/pro3.png'
              width={100}
              height={20}
              alt='trophy'
            />
            <p className='ml-2 text-xs'>
              Gather clues from the career test and your work preferences to
              identify top career options to explore.
            </p>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
