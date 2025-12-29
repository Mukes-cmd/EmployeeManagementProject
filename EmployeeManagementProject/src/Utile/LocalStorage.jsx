// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        task: "Create UI",
        description: "Design a modern login page UI",
        taskDate: "2025-01-10",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        task: "Bug Fix",
        description: "Resolve navbar alignment issue",
        taskDate: "2025-01-05",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        task: "Backend",
        description: "Integrate payment API",
        taskDate: "2025-01-07",
        category: "backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 4
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        task: "Frontend",
        description: "Build admin dashboard UI",
        taskDate: "2025-01-12",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        task: "UI Update",
        description: "Improve profile page design",
        taskDate: "2025-01-03",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Setup",
        task: "DevOps",
        description: "Configure production server",
        taskDate: "2025-01-06",
        category: "devops"
      }
    ]
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        task: "Testing",
        description: "Write tests for auth module",
        taskDate: "2025-01-15",
        category: "testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        task: "Performance",
        description: "Reduce image size",
        taskDate: "2025-01-02",
        category: "performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        task: "Deployment",
        description: "Deploy app to cloud",
        taskDate: "2025-01-04",
        category: "deployment"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        task: "UI Design",
        description: "Design homepage layout",
        taskDate: "2025-01-14",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        task: "Marketing",
        description: "Improve SEO ranking",
        taskDate: "2025-01-01",
        category: "seo"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        task: "Integration",
        description: "Setup email notifications",
        taskDate: "2025-01-08",
        category: "backend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Charts",
        task: "Data Visualization",
        description: "Add analytics charts",
        taskDate: "2025-01-11",
        category: "analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Code",
        task: "Code Cleanup",
        description: "Improve code readability",
        taskDate: "2025-01-03",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Third-party Login",
        task: "Auth",
        description: "Implement Google login",
        taskDate: "2025-01-06",
        category: "authentication"
      }
    ]
  }
]

const admin = [
  {
    id: 6,
    firstName: "Mukesh",
    email: "employee6@example.com",
    password: "123",
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: []
  }
]



export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
   
}