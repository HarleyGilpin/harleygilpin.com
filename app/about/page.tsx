import type { Metadata } from 'next';
import {
  GitHubIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'RPA Developer at Armanino.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hello there! I'm Harley, but most people know me as <b>Pixel</b> online.
      </p>
      <p>
        I'm a seasoned full-stack developer from Eugene, Oregon with a versatile professional background. My journey began at Bushnell University, where I majored in Business Management and Administration. From there, I expanded into freelance software development and digital marketing, and for the past 18 months, I've been an RPA Developer at Armanino.
      </p>
      <br />
      <hr />
      <br />
      <p>
        Over the past 12 years, I've honed my skills in various programming languages and frameworks, including Python, Kotlin, Java, HTML/CSS, React, and Node.js. I am also a certified Microsoft Power Platform professional. I have successfully used technical proficiency, adaptability, and problem-solving skills in my career as an RPA developer.
      </p>
      <br />
      <p>
        As for my professional goals, I plan on deepening my proficiency with current RPA tools and languages and aim to complete several certifications this year. Long-term, I see myself as a recognized expert in RPA technology, mentoring other developers, and leading high-performing teams.
      </p>
      <br />
      <p>
        Outside of my professional pursuits, I am an avid gamer and technology enthusiast. I contribute actively to open-source multiplayer game development projects and am passionate about creating innovative and immersive VR experiences.
      </p>
      <br />
      <p>
        One of my most notable projects was the importation of the <a href="https://vrchat.com/home/launch?worldId=wrld_c4a883c9-c288-4b45-ab98-19df9e498991"><u>890 Jump Super Yacht</u></a> from the game Star Citizen into VR Chat, a project that required intricate texturing work and presented numerous lighting challenges. I'm proud to share that it was received positively, garnering reviews from content creators (<a href="https://www.tiktok.com/@citizenred/video/7111750272782716166"><u>TikTok</u></a> and <a href="https://www.youtube.com/watch?v=aWAfU1_tA9Y"><u>YouTube</u></a>).
      </p>
      <br />
      <p>
        Feel free to get in touch with me through <a href="https://www.linkedin.com/in/harley-gilpin/"><u>LinkedIn</u></a> for any potential opportunities or collaborations. I look forward to connecting with you!
      </p>
      <br />
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/harleygilpin"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/HarleyGilpin"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
    </section>
  );
}