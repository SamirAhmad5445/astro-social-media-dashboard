const totalFollowersNumber = 23004;

export const totalFollowers = totalFollowersNumber
  .toString()
  .split("")
  .reverse()
  .map((v, i) => ((i + 1) % 3 === 0 ? `,${v}` : v))
  .reverse()
  .join("");

export const platformStats = [
  {
    platform: "facebook",
    user: "@nathanf",
    total: "1987",
    type: "Followers",
    isIncreasing: true,
    today: 12,
  },
  {
    platform: "twitter",
    user: "@nathanf",
    total: "1044",
    type: "Followers",
    isIncreasing: true,
    today: 99,
  },
  {
    platform: "instagram",
    user: "@realnathanf",
    total: "11k",
    type: "Followers",
    isIncreasing: true,
    today: 1099,
  },
  {
    platform: "youtube",
    user: "Nathan F.",
    total: "8239",
    type: "Subscribers",
    isIncreasing: false,
    today: 144,
  },
];
export const overviewTodayStats = [
  {
    platform: "facebook",
    type: "Page Views",
    isIncreasing: true,
    total: "87",
    percentage: "3%",
  },
  {
    platform: "facebook",
    type: "Likes",
    isIncreasing: false,
    total: "52",
    percentage: "2%",
  },
  {
    platform: "instagram",
    type: "Likes",
    isIncreasing: true,
    total: "5462",
    percentage: "2257%",
  },
  {
    platform: "instagram",
    type: "Profile Views",
    isIncreasing: true,
    total: "52k",
    percentage: "1375%",
  },
  {
    platform: "twitter",
    type: "Retweets",
    isIncreasing: true,
    total: "117",
    percentage: "303%",
  },
  {
    platform: "twitter",
    type: "Likes",
    isIncreasing: true,
    total: "507",
    percentage: "553%",
  },
  {
    platform: "youtube",
    type: "Likes",
    isIncreasing: false,
    total: "107",
    percentage: "19%",
  },
  {
    platform: "youtube",
    type: "Total Views",
    isIncreasing: false,
    total: "1407",
    percentage: "12%",
  },
];
