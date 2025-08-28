import user_image from './user_image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import asa_logo from './Asa_logo.png';
import asa_logo_dark from './Asa_logo_dark.png'
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color2.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github_logo from './github.png';
import linkedin_logo from './linkedin.png';
import python_logo from './python.png';
import numpy_logo from './NumPy.png';
import pandas_logo from './Pandas.png';
import mysql_logo from './MySQL.png';
import postgres_logo from './PostgresSQL.png';
import powerbi_logo from './PowerBI.png';
import tableau_logo from './Tableau.png';
import grafana_logo from './Grafana.png';
import c_logo from './C.png';
import c_plus_logo from './C++.png';
import klm_logo from './KLM.png';
import beest_logo from './Beest.png';
import uturn_logo from './UTurn.png';
import rsm_logo from './RSM.png';
import rug_logo from './RUG.png';
import hutrecht_logo from './HUtrecht.png'
import google_logo from './Google.png';
import deepai_logo from './deep.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    asa_logo,
    asa_logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    python_logo,
    numpy_logo,
    pandas_logo,
    mysql_logo,
    postgres_logo,
    powerbi_logo,
    tableau_logo,
    grafana_logo,
    c_logo,
    c_plus_logo,
    klm_logo,
    beest_logo,
    uturn_logo,
    rsm_logo,
    rug_logo,
    hutrecht_logo,
    google_logo,
    deepai_logo,
    github_logo,
    linkedin_logo
};

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'M.Sc Business Analytics (Erasmus University), , B.Sc Computing Science (University of Groningen)' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Experience', description: 'Data Analyst for Erasmus Centre for Data Analytics, Data Analyst for Beest Boulders, Software Engineer for Bridge' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects for top companies.' }
];

export const toolsViz = [assets.tableau_logo, assets.powerbi_logo, assets.grafana_logo]
export const toolsScience = [assets.python_logo, assets.numpy_logo, assets.pandas_logo, assets.mysql_logo, assets.postgres_logo]
export const toolsOthers = [assets.c_logo, assets.c_plus_logo]

export const projectsData = [
  {
    companyLogo: assets.uturn_logo,
    title: 'U-Turn Inland Freight Cost Predictor',
    description:
      'Machine Learning Project',
    achievements: [
      'Formulated a price recommender system reducing MAPE from 25% to 15%.',
      'Delivered competitive price forecasts for inland transport.',
    ],
    github: null, // NDA
    presentation: null, // optional
  },
  {
    companyLogo: assets.beest_logo,
    title: 'Beest Boulders Customer Analytics',
    description:
      'Machine Learning Project',
    achievements: [
      'Conducted 3 segmentation analyses to identify customer groups.',
      'Built churn prediction model with 83.8% accuracy, driving retention promotions.',
    ],
    github: null, // NDA
    presentation: null, // optional
  },
  {
    companyLogo: assets.klm_logo,
    title: 'KLM Flight Attendant Training Analytics',
    description:
      'Machine Learning Project',
    achievements: [
      'Cleaned and structured large training datasets to enable actionable insights.',
      'Identified patterns in training performance to improve program efficiency.',
    ],
    github: null, // NDA
    presentation: null,
  },
  {
    companyLogo: assets.rsm_logo,
    title: 'RSM Enrollment Predictor',
    description:
      'Machine Learning Project',
    achievements: [
      'Applied 7 ML techniques, achieving F1 score of 0.98.',
      'Delivered 99% precision and 97% recall using R and Python.',
    ],
    github: 'https://github.com/asayudhistira/RSM_Enrollment_Predictor',
    presentation: null, // optional
  },
  {
  companyLogo: assets.rsm_logo, // Erasmus/RUG for academic project
  title: 'Start-up Funding Predictor',
  description:
    'Machine Learning Project',
  achievements: [
    'Revealed dominant markets and funding trends in start-ups between 1995–2015 through descriptive analytics.',
    'Developed a predictive model for funding_total_usd achieving R² = 0.87 and RMSE = 3.4M USD on test data.',
  ],
  github: 'https://github.com/asayudhistira/Start-Up-Funding-Predictor', // add if public
  presentation: 'https://drive.google.com/file/d/1RKN4JXJeVNVOy6w5gTQcce24NF0AL2Gz/preview',
  },
  {
    companyLogo: assets.rug_logo,
    title: 'Stock Exchange Simulation',
    description:
      'Object-Oriented Project',
    achievements: [
      'Implemented key OOP design patterns: Singleton, Factory, Abstract, Command, Facade.',
      'Used Java, Git, Docker, and IntelliJ for scalable development.',
    ],
    github: 'https://github.com/asayudhistira/StockSim', // ✅ example repo
    presentation: null,
  },
  {
    companyLogo: assets.hutrecht_logo,
    title:
      'Emerging Digital Technologies in SMEs: Backlog for Future Research',
    description:
      'Analytics Project',
    achievements: [
      'Applied statistical modeling and NLP with R & Python.',
      'Interviewed 130+ SMEs in the Netherlands to capture digital adoption insights.',
    ],
    github: null,
    presentation: null,
  },
]

export const certsData = [
  {
    issuerLogo: assets.google_logo,          // e.g. '/logos/coursera.png'
    issuerName: ' Google',
    title: 'Google Data Analytics Professional Certificate',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/92QE7OEMB6VA',
  },
  {
    issuerLogo: assets.google_logo,
    issuerName: 'Google',
    title: 'Google Business Intelligence Professional Certificate',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/1UD1M1EEWC51',
  },
  {
    issuerLogo: assets.deepai_logo,
    issuerName: 'DeepLearning.AI',
    title: 'Machine Learning Specialization',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/WKWSWLLQ6AWU',
  },
]
