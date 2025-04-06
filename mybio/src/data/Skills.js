import {
  Code2,
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
} from "lucide-react";

const skills = {
  "Programming Languages": {
    icon: Code2,
    skillsData: [
      { name: "Python", icon: "/images/coding-icons/python.png" },
      { name: "JavaScript", icon: "/images/coding-icons/javascript.png" },
      { name: "TypeScript", icon: "/images/coding-icons/typescript.png" },
      { name: "Dart", icon: "/images/coding-icons/dart.png" },
    ],
  },
  "Frontend Development": {
    icon: Layout,
    skillsData: [
      { name: "React", icon: "/images/coding-icons/react2.png" },
      { name: "Redux", icon: "/images/coding-icons/redux.png" },
      { name: "Tailwind", icon: "/images/coding-icons/tailwind-css.png" },
      { name: "CSS", icon: "/images/coding-icons/css.png" },
      { name: "HTML", icon: "/images/coding-icons/html.png" },
      {
        name: "NextJs",
        icon: {
          light: "/images/coding-icons/nextjs-dark.png",
          dark: "/images/coding-icons/nextjs-light.png",
        },
      },
    ],
  },
  "Backend Development": {
    icon: Server,
    skillsData: [
      {
        name: "Django",
        icon: {
          light: "/images/coding-icons/django-dark.png",
          dark: "/images/coding-icons/django-light.png",
        },
      },
      { name: "NodeJs", icon: "/images/coding-icons/nodejs.png" },
      {
        name: "ExpressJs",
        icon: {
          light: "/images/coding-icons/express-js-dark.png",
          dark: "/images/coding-icons/express-js-light.png",
        },
      },
      { name: "GraphQL", icon: "/images/coding-icons/graphql.png" },
    ],
  },
  "Mobile Development": {
    icon: Smartphone,
    skillsData: [
      { name: "Flutter", icon: "/images/coding-icons/flutter.png" },
      { name: "Android", icon: "/images/coding-icons/android.png" },
    ],
  },
  Databases: {
    icon: Database,
    skillsData: [
      {
        name: "SQL",
        icon: {
          light: "/images/coding-icons/sql-dark.png",
          dark: "/images/coding-icons/sql-light.png",
        },
      },
      { name: "MySQL", icon: "/images/coding-icons/mysql.png" },
      { name: "MongoDB", icon: "/images/coding-icons/mongo-db.png" },
      { name: "Redis", icon: "/images/coding-icons/redis.png" },
      { name: "PostgreSQL", icon: "/images/coding-icons/postgresql.png" },
      { name: "Firebase", icon: "/images/coding-icons/firebase.png" },
    ],
  },
  DevOps: {
    icon: Cloud,
    skillsData: [
      { name: "AWS", icon: "/images/coding-icons/aws.png" },
      { name: "Docker", icon: "/images/coding-icons/docker.png" },
      { name: "Jenkins", icon: "/images/coding-icons/jenkins.png" },
      { name: "CI/CD", icon: "/images/coding-icons/cicd.png" },
      { name: "Nginx", icon: "/images/coding-icons/nginx.png" },
    ],
  },
};

export default skills;

// { name: "Rust", icon: "/images/coding-icons/rust.png" },
// {
//   name: "Flask",
//   icon: {
//     light: "/images/coding-icons/flask.png",
//     dark: "/images/coding-icons/flask-light.png",
//   },
// },
// { name: "FastAPI", icon: "/images/coding-icons/fastapi.png" },
// {
//   name: "SQLite",
//   icon: {
//     light: "/images/coding-icons/sqlite-dark.png",
//     dark: "/images/coding-icons/sqlite-light.png",
//   },
// },
// { name: "Photoshop", icon: "/images/coding-icons/photoshop.png" },
// { name: "Selenium", icon: "/images/coding-icons/selenium.png" },
//
// { name: "Figma", icon: "/images/coding-icons/figma.png" },

// {
//   name: "Github",
//   icon: {
//     light: "/images/coding-icons/github-dark.png",
//     dark: "/images/coding-icons/github-light.png",
//   },
// },
//
