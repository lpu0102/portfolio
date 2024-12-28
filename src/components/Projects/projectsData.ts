interface Project {
  title: string;
  organization: string;
  technologies: string[];
  summary: string[];
  impact: string;
  category: 'cloud' | 'security' | 'infrastructure';
}

export const featuredProjects: Project[] = [
  {
    title: "Cloud Cost Optimization and Automation",
    organization: "eBay",
    technologies: ["Azure", "AWS", "PowerShell", "Python", "Azure Monitor", "AWS CloudWatch"],
    summary: [
      "Designed cost-saving strategies in Azure, leveraging Reserved Instances and automation scripts",
      "Reduced operational costs by identifying and decommissioning underutilized resources",
      "Achieved efficient resource management with PowerShell and Python automation"
    ],
    impact: "Improved efficiency and reduced costs for cloud operations",
    category: "cloud"
  },
  {
    title: "Scalable Cloud Infrastructure Deployment",
    organization: "NTT DATA",
    technologies: ["Azure", "AWS", "VMware", "Terraform", "Azure DevOps"],
    summary: [
      "Built scalable cloud infrastructure using Terraform and automated CI/CD pipelines",
      "Conducted regular security assessments to ensure compliance",
      "Enabled seamless resource provisioning and deployment consistency"
    ],
    impact: "Supported rapid scaling and ensured operational reliability for critical infrastructure",
    category: "infrastructure"
  },
  {
    title: "High Availability and Backup Management",
    organization: "eBay",
    technologies: ["AWS ECS", "Docker", "Kubernetes", "Veeam Backup", "SAN"],
    summary: [
      "Deployed containerized applications for high availability using Kubernetes and Docker",
      "Optimized backup solutions with Veeam for improved reliability",
      "Managed SAN storage for scalability and future growth"
    ],
    impact: "Enhanced data protection and system availability for mission-critical applications",
    category: "infrastructure"
  }
];

export const additionalProjects: Project[] = [
  {
    title: "Disaster Recovery and Security Implementation",
    organization: "NTT DATA",
    technologies: ["Azure", "AWS", "Terraform", "Active Directory", "VMware"],
    summary: [
      "Designed and implemented comprehensive disaster recovery solutions",
      "Conducted regular security assessments and compliance audits",
      "Established robust backup and failover procedures"
    ],
    impact: "Achieved 99.99% system availability and enhanced security posture",
    category: "security"
  },
  {
    title: "Virtualized Infrastructure Optimization",
    organization: "Sify DataCenter",
    technologies: ["VMware vSphere", "VMware vCenter", "SAN", "Hyper-V"],
    summary: [
      "Administered and optimized virtualized environments",
      "Led cross-functional projects for system architecture enhancement",
      "Implemented storage efficiency improvements"
    ],
    impact: "Reduced infrastructure costs by 30% while improving performance",
    category: "infrastructure"
  },
  {
    title: "POS System Integration and Endpoint Management",
    organization: "eBay",
    technologies: ["Intune", "Azure Active Directory", "SCCM", "WSUS"],
    summary: [
      "Integrated POS systems into existing IT infrastructure",
      "Managed endpoints and enforced security best practices",
      "Protected sensitive data through robust security measures"
    ],
    impact: "Successfully secured 500+ endpoints and POS systems",
    category: "security"
  }
];