export type Lang = 'pt' | 'en' | 'es';

export interface Translation {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    skip: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    mentorship: string;
    articles: string;
    contact: string;
  };
  hero: {
    roleBadge: string;
    statusBadge: string;
    name: string;
    nameHighlight: string;
    subtitle: string;
    bio: string;
    linkedin: string;
    github: string;
    email: string;
  };
  techBadges: {
    tag: string;
    title: string;
    items: string[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  skills: {
    title: string;
    cloud: { title: string; desc: string };
    devops: { title: string; desc: string };
    sre: { title: string; desc: string };
    leadership: { title: string; desc: string };
  };
  projects: {
    title: string;
    tag: string;
    p1: { category: string; title: string; desc: string; tags: string[] };
    p2: { category: string; title: string; desc: string; tags: string[] };
    p3: { category: string; title: string; desc: string; tags: string[] };
  };
  experience: {
    title: string;
    role1: { title: string; company: string; desc: string };
    role2: { title: string; company: string; desc: string };
  };
  mentorship: {
    sectionTitle: string;
    badge: string;
    title: string;
    desc: string;
    cta: string;
    zoomText: string;
    escText: string;
    imageAlt: string;
    imageEnlargedAlt: string;
  };
  blog: {
    title: string;
    viewDevTo: string;
    featured: {
      badge: string;
      tag1: string;
      tag2: string;
      date: string;
      readTime: string;
      title: string;
      summary: string;
      intro: string;
      step1: { title: string; desc: string; points: string[] };
      step2: { title: string; desc: string; points: string[] };
      step3: { title: string; desc: string; points: string[] };
      step4: { title: string; desc: string; points: string[] };
      step5: { title: string; desc: string; points: string[] };
      author: string;
      githubSource: string;
    };
    sec1: { tag: string; year: string; type: string; title: string; desc: string; cta: string };
    sec2: { tag: string; year: string; type: string; title: string; desc: string; cta: string };
  };
  community: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  footer: {
    copyright: string;
  };
}
