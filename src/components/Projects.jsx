import React, {useState} from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import e_commerce from '../images/e_commerce.png';
import e_commerce_landing from '../images/e_commerce/landing.png';
import item_description from '../images/e_commerce/item_description.png';
import home_items from '../images/e_commerce/home_items.png';
import login from '../images/e_commerce/login.png';
import e_commerce_user_profile from '../images/e_commerce/e_commerce_user_profile.png';
import cart from '../images/e_commerce/cart.png';
import shop from '../images/e_commerce/shop.png';
import payment from '../images/e_commerce/payment.png';
import revisionAi from '../images/revisionai1.png';
import dashboard from '../images/revisionai/dashboard.png';
import add_course from '../images/revisionai/add_course.png';
import add_lecture from '../images/revisionai/add_lecture.png';
import audio from '../images/revisionai/audio.png';
import runpod from '../images/revisionai/runpod.png';
import keywords from '../images/revisionai/keywords.png';
import summary_list from '../images/revisionai/summary_list.png';
import summary_page from '../images/revisionai/summary_page.png';
import explanation from '../images/revisionai/explanation.png';
import keyword_explanation from '../images/revisionai/keyword_explanation.png';
import important_info from '../images/revisionai/important_info.png';
import revision_login from '../images/revisionai/login.png';
import comic_generator from '../images/comic_generator.png';
import superman from '../images/comic_maker/superman.png';
import green_lantern from '../images/comic_maker/green_lantern.png';
import iron_man from '../images/comic_maker/iron_man.png';
import mib from '../images/comic_maker/mib.png';
import batman from '../images/comic_maker/batman.png';
import iron_man2 from '../images/comic_maker/iron_man2.png';
import captain_america from '../images/comic_maker/captain_america.png';
import flash from '../images/comic_maker/flash.png';
import covid_detector from '../images/covid_detector.png';
import covid_landing from '../images/covid_detector/covid_landing.png';
import covid_login from '../images/covid_detector/covid_login.png';
import covid_dashboard from '../images/covid_detector/covid_dashboard.png';
import questionnaire from '../images/covid_detector/questionnaire.png';
import results from '../images/covid_detector/results.png';
import chatbot from '../images/covid_detector/chatbot.png';
import register from '../images/covid_detector/register.png';
import discord_bot from '../images/discord_bot.png';
import image1 from '../images/discord_bot/image1.png';
import image2 from '../images/discord_bot/image2.png';
import image3 from '../images/discord_bot/image3.png';
import image4 from '../images/discord_bot/image4.png';
import react_blog from '../images/react_blog.png';
import blog_home from '../images/react_blog/blog_home.png';
import articles from '../images/react_blog/articles.png';
import blog_login from '../images/react_blog/blog_login.png';
import blog_comments from '../images/react_blog/blog_comments.png';
import blog_register from '../images/react_blog/blog_register.png';

import { FaEye } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    title: 'E-commerce platform',
    short_description: 'An e-commerce site built using Python Django, SQLite, HTML, CSS, JavaScript, and Bootstrap.',
    long_description: 'An e-commerce website built using Python Django that allows users to purchase shoes of different brands. It includes all the basic functionalities of an e-commerce project, providing a seamless shopping experience for users.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'Bootstrap', 'Celery'],
    thumbnail: e_commerce,
    images: [e_commerce_landing, home_items, item_description, login, e_commerce_user_profile, cart, shop, payment],
    link: "https://github.com/khtrivedi84/E-commerce-shoes"
  },
  {
    id: 2,
    title: 'RevisionAI',
    short_description: 'An AI powered tool to summarize class recordings and do quick revision.',
    long_description: 'RevisionAI is a web application that utilizes artificial intelligence (AI) to generate topic-wise summaries and extract important information from uploaded class recordings. With this application, you can easily summarize your recorded lectures, identify key topics, and extract essential details for exams, midterms, assignments, or preparing for future lectures.',
    technologies: ['Python', 'Flask', 'API', 'OpenAI', 'AWS', 'Docker', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'AI'],
    thumbnail: revisionAi,
    images: [dashboard, add_course, add_lecture, audio, runpod, keywords, summary_list, summary_page, explanation, keyword_explanation, important_info, revision_login],
    link: "https://github.com/khtrivedi84/RevisionAI"
  },
  {
    id: 3,
    title: 'Covid Detection',
    short_description: 'A web application that detects Covid and also features an AI ChatBot that provides recovery suggestions.',
    long_description: 'Covid Detection is a web application that utilizes a deep learning model to detect Covid-19 using CT scan images. The application also features an AI ChatBot that provides recovery suggestions to users. The deep learning model is trained on a dataset of CT scan images to accurately detect Covid-19 in patients.',
    technologies: ['Python', 'Flask', 'Keras', 'TensorFlow', 'NumPy', 'OpenAI', 'HTML', 'CSS', 'JavaScript'],
    thumbnail: covid_detector,
    images: [covid_landing, covid_login, covid_dashboard, questionnaire, results, chatbot, register],
    link: "https://github.com/khtrivedi84/covid-19-detection"
  },
  {
    id: 4,
    title: 'Comic Generator',
    short_description: 'Custom AI to generate comic panels featuring YOU as any superhero in your chosen art style.',
    long_description: 'Comic Generator is a custom AI that generates comic panels featuring you as any superhero in your chosen art style. The AI uses StableDiffusion, a state-of-the-art generative model, to create comic panels based on your input. You can choose from a variety of art styles and superhero costumes to create your own unique comic book.',
    technologies: ['Python', 'Jupyter', 'StableDiffusion', 'Colab', 'AI', 'OpenAI'],
    thumbnail: comic_generator,
    images: [superman, green_lantern, iron_man, mib, batman, iron_man2, captain_america, flash],
    link: "https://github.com/khtrivedi84/ComicMaker"
  },
  {
    id: 5,
    title: 'CheerMeUp - Discord Bot',
    short_description: 'CheerMeUp is a Discord bot designed to bring some cheer into your day!.',
    long_description: 'This bot engages with users every two hours to inquire about their current mood and offers personalized motivational support based on their responses. The frequency of interactions can be adjusted to suit individual preferences.\n\nKey features include:\n- Mood Selection: Users can choose from a range of emotions to accurately describe their current state.\n- Personalized Motivation: The bot generates motivational text tailored to the mood selected by the user using GPT technology.\n- Custom Visuals: Utilizing DALL-E, the bot creates images that complement the motivational messages.\n- Intelligent Prompt Generation: The bot crafts prompts dynamically to facilitate meaningful interactions and enhance user experience.',
    technologies: ['Python', 'Jupyter', 'StableDiffusion', 'Colab', 'AI', 'OpenAI'],
    thumbnail: discord_bot,
    images: [image2, image1, image3, image4],
    link: "https://github.com/khtrivedi84/CheerMeUp-discord-bot"
  },
  {
    id: 6,
    title: 'Blog site using React',
    short_description: 'A simple blog site built using ReactJS, Node.js, Express, and MongoDB.',
    long_description: 'The project showcases a home page and renders articles using React components. It incorporates login/logout functionality through Firebase authentication and is deployed on the Google Cloud Platform. Additionally, it features an "Add Comments" functionality utilizing React hooks, such as useState and useEffect, to manage different component states. This project is hosted on Google Cloud and the database is in MongoDB.',
    technologies: ['React', 'NodeJS', 'MongoDB', 'Redux', 'Google Cloud Platform', 'Firebase', "HTML", "CSS", "JavaScript", "Express"],
    thumbnail: react_blog,
    images: [blog_home, articles, blog_login, blog_comments, blog_register],
    link: "https://github.com/khtrivedi84/ReactJS-Blog"
  }
];

const cardVariants = {
  hover: {
    translateY: -15,
    boxShadow: '0px 10px 20px rgba(255, 255, 255, 0.3)',
    transition: {
      duration: 0.2,
    },
  }
};

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className={`container justify-content-center mt-4 ${styles.projectsContainer}`}>
      <div className={`row ${styles.cardsRow}`}>
        <h2 className={`text-center mt-4 text-light`}>Projects</h2>
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            className={`col-lg-3 col-md-4 col-sm-6 ${styles.card2} mx-md-3`}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => openModal(project)}
          >
            <div className={`${styles.cardImageContainer}`}>
              <img src={project.thumbnail} alt={project.title} className={styles.cardImage} />
              <div className={styles.overlay_card}>
                  <FaEye  className={`${styles.overlayIcon} d-none d-lg-block`} />
                  <div className={styles.lBorderTopLeft}></div>
                  <div className={styles.lBorderBottomRight}></div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{project.title}</h5>
              <p className={styles.cardDescription}>{project.short_description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <ProjectModal isOpen={modalIsOpen} closeModal={closeModal} project={selectedProject} />
    </div>
  );
}

export default Projects;