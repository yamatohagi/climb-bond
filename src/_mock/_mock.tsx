import { sub } from 'date-fns';
//
import {
  role,
  email,
  video,
  boolean,
  company,
  phoneNumber,
  //
  firstName,
  lastName,
  fullName,
  //
  price,
  rating,
  age,
  percent,
  //
  fullAddress,
  country,
  //
  jobTitle,
  tourName,
  sentence,
  blogTitle,
  brandsName,
  courseTitle,
  description,
  jobCategories,
} from './assets';

// ----------------------------------------------------------------------

const _mock = {
  id: (index: any) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index: any) => email[index],
  phoneNumber: (index: any) => phoneNumber[index],
  time: (index: any) => sub(new Date(), { days: index, hours: index }),
  boolean: (index: any) => boolean[index],
  role: (index: any) => role[index],
  company: (index: any) => company[index],
  address: {
    fullAddress: (index: any) => fullAddress[index],
    country: (index: any) => country[index],
  },
  name: {
    firstName: (index: any) => firstName[index],
    lastName: (index: any) => lastName[index],
    fullName: (index: any) => fullName[index],
  },
  text: {
    blogTitle: (index: any) => blogTitle[index],
    courseTitle: (index: any) => courseTitle[index],
    jobTitle: (index: any) => jobTitle[index],
    jobCategories: (index: any) => jobCategories[index],
    tourName: (index: any) => tourName[index],
    brandsName: (index: any) => brandsName[index],
    sentence: (index: any) => sentence[index],
    description: (index: any) => description[index],
  },
  number: {
    percent: (index: any) => percent[index],
    rating: (index: any) => rating[index],
    age: (index: any) => age[index],
    price: (index: any) => price[index],
  },
  image: {
    avatar: (index: any) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    company: (index: any) => `/assets/images/company/company_${index + 1}.png`,
    marketing: (index: any) => `/assets/images/marketing/marketing_${index + 1}.jpg`,
    travel: (index: any) => `/assets/images/travel/travel_${index + 1}.jpg`,
    career: (index: any) => `/assets/images/career/career_${index + 1}.jpg`,
    course: (index: any) => `/assets/images/course/course_${index + 1}.jpg`,
    product: (index: any) => `/assets/images/product/product_${index + 1}.png`,
  },
  video: (index: any) => video[index],
  jobTitle,
  jobCategories,
  shareLinks: {
    facebook: `facebook/user-name`,
    instagram: `instagram/user-name`,
    linkedin: `linkedin/user-name`,
    twitter: `twitter/user-name`,
  },
};

export default _mock;
