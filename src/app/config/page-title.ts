type PageTitle = {
  regex: RegExp,
  value: string
}

export const PageTitles: PageTitle[] = [
  { regex: /^\/home/, value: 'Home' },
  { regex: /^\/about/, value: 'About' },
  { regex: /^\/contact/, value: 'Contact Us' },
  { regex: /^\/connect-with-us/, value: 'Connect With Us' },
  { regex: /^\/blog-create/, value: 'Create Blog' },
  { regex: /^\/blog-view/, value: 'View Blog' },
  { regex: /^\/blog-edit/, value: 'Edit Blog' },
];