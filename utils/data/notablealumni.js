const notableAlumni = [
  {
    name: "John D. Rockefeller",
    title:
      "American industrialist and philanthropist who graduated from Harvard in 1876",
    description:
      "John D. Rockefeller was an American industrialist and philanthropist who graduated from Harvard in 1876. He is considered one of the wealthiest Americans in history, and his philanthropy significantly impacted education, public health, and scientific research.",
    img: "http://drive.google.com/uc?export=view&id=1AJqxwO9Odsj8mpZs73m_4k8mXwGfiNUA",
    univeristyId: 1,
  },
  {
    name: "Theodore Roosevelt",
    title:
      "American industrialist and philanthropist who graduated from Harvard in 1876",
    description:
      "Theodore Roosevelt, the 26th President of the United States, graduated from Harvard in 1880. He was the youngest President in US history and served two terms in office from 1901 to 1909. He is known for his progressive policies, including creating the Panama Canal and establishing the National Park System.",
    img: "http://drive.google.com/uc?export=view&id=1lvm6FdrtDNHFjH5nZkL07Yv_7xpZKroa",
    univeristyId: 1,
  },
  {
    name: "Franklin D. Roosevelt",
    title: "the 32nd President of the United States",
    description:
      "Franklin D. Roosevelt, the 32nd President of the United States, graduated from Harvard in 1903. He served as President from 1933 to 1945 and was the only President in history to be elected to four terms in office. He is known for his leadership during the Great Depression and World War II",
    img: "http://drive.google.com/uc?export=view&id=1Y5V-Pmyv19jQvTJJvfdd3G3BTyYYna-l",
    univeristyId: 1,
  },
  {
    name: "John F. Kennedy",
    title: "the 35th President of the United States",
    description:
      "John F. Kennedy, the 35th President of the United States, graduated from Harvard in 1940. He served as President from 1961 to 1963 and is known for his leadership during the Cold War and the Civil Rights Movement.",
    img: "http://drive.google.com/uc?export=view&id=1ntAZXB5nU5-1uUoO9o9-f227gVBMa0rR",
    univeristyId: 1,
  },
  {
    name: "Bill Gates",
    title: "the co-founder of Microsoft",
    description:
      "Bill Gates, the co-founder of Microsoft and one of the wealthiest people in the world, dropped out of Harvard in 1975. He is known for his philanthropy through the Bill and Melinda Gates Foundation, which focuses on global health, education, and poverty.",
    img: "http://drive.google.com/uc?export=view&id=1sRhgypYaJssOdZ31-ZY_iEGhlwWvXedU",
    univeristyId: 1,
  },
  {
    name: "Mark Zuckerberg",
    title: "the co-founder and CEO of Facebook",
    description:
      "Mark Zuckerberg, the co-founder and CEO of Facebook, graduated from Harvard in 2006. He is one of the youngest billionaires in the world and has been influential in the development and growth of social media.",
    img: "http://drive.google.com/uc?export=view&id=1WD8MXN_FP9rxftt0F_FlyVSdxrKwRJZ8",
    univeristyId: 1,
  },
  {
    name: "Matt Damon",
    title: "an actor, screenwriter, and producer",
    description:
      "Matt Damon, an actor, screenwriter, and producer, graduated from Harvard in 1992. He is known for his roles in films such as Good Will Hunting, The Bourne Identity, and The Martian.",
    img: "http://drive.google.com/uc?export=view&id=1FJl7LA16nwysASEbFmWf1H7oKJsZbL5a",
    univeristyId: 1,
  },
  {
    name: "Conan O'Brien",
    title: "a television host, comedian, and writer",
    description:
      "Conan O'Brien is a television host, comedian, and writer, who graduated from Harvard in 1985. He is known for his work as the host of Late Night with Conan O'Brien and The Tonight Show.",
    img: "http://drive.google.com/uc?export=view&id=138YDnMmIXfBZubtmP94asCk3SSa0v8GN",
    univeristyId: 1,
  },
  {
    name: "Natalie Portman",
    title: "an actress and filmmaker",
    description:
      "Natalie Portman, an actress and filmmaker, graduated from Harvard in 2003. She is known for her work as a producer and director and her roles in films such as The Professional, Black Swan, and Thor.",
    img: "http://drive.google.com/uc?export=view&id=1io__3CzGTQ4fng1Y0xhmtpi23X9YjDgx",
    univeristyId: 1,
  },
  {
    name: "Bill Clinton",
    title: "the 42nd President of the United States",
    description:
      "Bill Clinton, the 42nd President of the United States, graduated from Yale Law School in 1973. He served as President from 1993 to 2001 and is known for his efforts to reform healthcare, reduce crime, and improve the economy.",
    img: "http://drive.google.com/uc?export=view&id=1IGcezU5e0k96KR0CGGU-41okKmH_GMzK",
    univeristyId: 2,
  },
  {
    name: "George H.W. Bush",
    title: "the 41st President of the United States",
    description:
      "George H.W. Bush, the 41st President of the United States, graduated from Yale in 1948. He served as President from 1989 to 1993 and is known for his leadership during the end of the Cold War and the Gulf War.",
    img: "http://drive.google.com/uc?export=view&id=1ucU2b3vIAC-RJ1tJn7y78BA0naClcdU1",
    univeristyId: 2,
  },
  {
    name: "George W. Bush",
    title: "the 43rd President of the United States",
    description:
      "George W. Bush, the 43rd President of the United States, graduated from Yale in 1968. He served as President from 2001 to 2009 and is known for his leadership during the War on Terror and the Iraq War",
    img: "http://drive.google.com/uc?export=view&id=1uDYa2p3N7yg3rhGuXccElDk1WlQVBGCU",
    univeristyId: 2,
  },
  {
    name: "Meryl Streep",
    title: "an actress",
    description:
      "Meryl Streep, an actress, graduated from Yale School of Drama in 1975. She is considered one of the greatest actresses of her generation and has received numerous awards and accolades for her performances in films such as The Devil Wears Prada, Doubt, and August: Osage County.",
    img: "http://drive.google.com/uc?export=view&id=1Fm91M8M0AO05_5DCI3gUTsIEtc7yDRUy",
    univeristyId: 2,
  },
  {
    name: "Jodie Foster",
    title: "an actress, director, and producer",
    description:
      "Jodie Foster is an actress, director, and producer who graduated from Yale in 1985. She is known for her roles in films such as Taxi Driver, The Accused, and The Silence of the Lambs and also for her work as a director and producer.",
    img: "http://drive.google.com/uc?export=view&id=1Gz5rzDV2K4Yyg682khqRrDVTP_IIO58i",
    univeristyId: 2,
  },
  {
    name: "Nathan Myhrvold",
    title:
      "inventor, entrepreneur, author, and former chief technology officer of Microsoft",
    description:
      "Nathan Myhrvold, inventor, entrepreneur, author, and former chief technology officer of Microsoft. He graduated from Yale College in 1980 and received his Ph.D. from Princeton University",
    img: "http://drive.google.com/uc?export=view&id=1jy8CDAzKjBHkutsNN006IRJn54znIoIO",
    univeristyId: 2,
  },
  {
    name: "Paul Newman",
    title: "an actor, film director, and philanthropist",
    description:
      "Paul Newman, an actor, film director, and philanthropist graduated from Yale in 1949. He is known for his roles in films such as The Hustler, Cool Hand Luke, Butch Cassidy, and the Sundance Kid.",
    img: "http://drive.google.com/uc?export=view&id=1rrCDqzAAaMoW__vxxwTbQ2xsVovMofo1",
    univeristyId: 2,
  },
  {
    name: "Samuel Morse",
    title: "the inventor of the Morse code and the telegraph",
    description:
      "Samuel Morse, the inventor of the Morse code and the telegraph, graduated from Yale in 1810. He is also a painter who studied art at Yale.",
    img: "http://drive.google.com/uc?export=view&id=1VfyCZtOHYoLVtYBPOSKP698rYAZ04JFR",
    univeristyId: 2,
  },
  {
    name: "A. Bartlett Giamatti",
    title: "former President of Yale University",
    description:
      "A. Bartlett Giamatti, former President of Yale University and commissioner of Major League Baseball, graduated from Yale in 1960.",
    img: "http://drive.google.com/uc?export=view&id=1j_lO7rj679sSln4grOsyt3BThwdr0VQI",
    univeristyId: 2,
  },
  {
    name: "Hillary Clinton",
    title: "the 67th United States Secretary of State",
    description:
      "Hillary Clinton, the 67th United States Secretary of State, a senator of New York, and the 2016 Democratic Presidential nominee graduated from Yale Law School in 1973.",
    img: "http://drive.google.com/uc?export=view&id=14o2D-lWEFfFiwbkjxNNLfeyI3eDV0mzx",
    univeristyId: 2,
  },
  {
    name: "Woodrow Wilson",
    title: "the 28th President of the United States",
    description:
      "Woodrow Wilson, the 28th President of the United States, graduated from Princeton in 1879 with a Ph.D. in political science. He served as the President of Princeton University from 1902 to 1910 before being elected President of the United States in 1912.",
    img: "http://drive.google.com/uc?export=view&id=1Gft77rISYa9Vggw_aFoWWhZxwLOSxodj",
    univeristyId: 3,
  },
  {
    name: "James Madison",
    title: "the 4th President of the United States",
    description:
      "attended Princeton but did not graduate. He played a crucial role in drafting the United States Constitution and was one of the prominent architects of the American political system.",
    img: "http://drive.google.com/uc?export=view&id=1FRC_wfIlFPKwCp8KGMGNyps6taTJ8Y-h",
    univeristyId: 3,
  },
  {
    name: "Jeff Bezos",
    title: "the founder and CEO of Amazon",
    description:
      "Jeff Bezos, the founder and CEO of Amazon, graduated from Princeton in 1986 with a degree in electrical engineering and computer science. He went on to found Amazon, which has become one of the world's largest and most successful companies.",
    img: "http://drive.google.com/uc?export=view&id=19Yb2YB7xkZ4sBHIhz8_AuAVp2XXiQE2a",
    univeristyId: 3,
  },
  {
    name: "Alan Turing",
    title: "the mathematician and computer scientist",
    description:
      "Alan Turing, the mathematician and computer scientist widely considered the father of modern computing, attended Princeton as a graduate student but did not graduate. He made significant contributions to the field of theoretical computer science, including the development of the Turing machine and the concept of the Universal Turing Machine.",
    img: "http://drive.google.com/uc?export=view&id=1z3-Qd9pOiIo7uPBKU_TmG9bLpSzBdKeR",
    univeristyId: 3,
  },
  {
    name: "Toni Morrison",
    title: "the Pulitzer Prize-winning author",
    description:
      "Toni Morrison, the Pulitzer Prize-winning author, graduated from Princeton in 1957 with a degree in English. She is widely considered one of the most influential American authors of the 20th century and has won numerous awards for her work, including the Nobel Prize in Literature in 1993.",
    img: "http://drive.google.com/uc?export=view&id=13SabvoK9kE5NPT7DoGFdo5gQzkrRmRjB",
    univeristyId: 3,
  },
  {
    name: "Michelle Obama",
    title: "the former First Lady of the United States",
    description:
      "Michelle Obama, the former First Lady of the United States, graduated from Princeton in 1985 with a degree in sociology. She became a lawyer and advocated for education and women's rights before serving as First Lady during her husband's presidency.",
    img: "http://drive.google.com/uc?export=view&id=10-6odJKEhAaNt91sQxnFZ4-ClXTypuMT",
    univeristyId: 3,
  },
  {
    name: "Sebastian Thrun",
    title: "the founder of Google X",
    description:
      "Sebastian Thrun, the founder of Google X, graduated from Princeton in 1994 with a Ph.D. in computer science. He has made significant contributions to the field of artificial intelligence, including the development of the self-driving car.",
    img: "http://drive.google.com/uc?export=view&id=15Pm4I4PtRPfkhtkh2sa_g5X8x_7GMf1i",
    univeristyId: 3,
  },
  {
    name: "Jimmy Stewart",
    title: "the actor",
    description:
      "Jimmy Stewart, the actor, graduated from Princeton in 1932 with a degree in architecture. He had a successful career in Hollywood, appearing in over 80 films and winning an Academy Award for his role in 'It's a Wonderful Life.'",
    img: "http://drive.google.com/uc?export=view&id=1fVn12fUqxGr-A19KZediHimSJOk1uZwm",
    univeristyId: 3,
  },
  {
    name: "Larry Page and Sergey Brin",
    title: "co-founders of Google",
    description:
      "Larry Page and Sergey Brin: Both co-founders of Google graduated with PhDs in computer science from Stanford in 2004. Their work at the university on the PageRank algorithm, which is the basis for Google's search engine, led to the creation of one of the world's most successful and influential companies.",
    img: "http://drive.google.com/uc?export=view&id=13d4Z0ofFYsW7UDbb_c7awmf_vAFRMBXx",
    univeristyId: 4,
  },
  {
    name: "Reed Hastings",
    title: "The co-founder and CEO of Netflix",
    description:
      "Reed Hastings: The co-founder and CEO of Netflix, earned a master's degree in computer science from Stanford in 1988. He later founded Netflix in 1997, which has revolutionized the way people consume television and movies.",
    img: "http://drive.google.com/uc?export=view&id=1Q7qy4cqUL_t11XTFI6BkCad6x5syVBW3",
    univeristyId: 4,
  },
  {
    name: "Elon Musk",
    title: "The CEO of SpaceX and Tesla",
    description:
      "Elon Musk: The CEO of SpaceX and Tesla received a Ph.D. in energy physics from Stanford in 2002, but he left the program after two days as he decided to pursue his entrepreneurial ventures. He went on to found Zip2, which was sold to Compaq for almost $300 million, and later founded SpaceX, Tesla, and SolarCity.",
    img: "http://drive.google.com/uc?export=view&id=1DE3f-sScGMOQVAMvQto0Hsil5xDiU816",
    univeristyId: 4,
  },
  {
    name: "Phil Knight",
    title: "Nike's co-founder",
    description:
      "Phil Knight, Nike's co-founder, earned a master's degree in business administration from Stanford in 1962. He co-founded Blue Ribbon Sports, which later became Nike, one of the world's most successful and iconic brands.",
    img: "http://drive.google.com/uc?export=view&id=13pz-yugehZPmtggBC5fPowLI2A3dc76n",
    univeristyId: 4,
  },
  {
    name: "Herbert Hoover",
    title: "The 31st President of the United States",
    description:
      "Herbert Hoover: The 31st President of the United States, earned a degree in geology from Stanford in 1895. He had a successful career as a mining engineer before entering politics, serving as President from 1929 to 1933.",
    img: "http://drive.google.com/uc?export=view&id=1sdaacMMvYi-eoM8dqKn_pKWOJmWSZ3dA",
    univeristyId: 4,
  },
  {
    name: "Sandra Day O'Connor",
    title: "The first female justice of the United States Supreme Court",
    description:
      "Sandra Day O'Connor: The first female justice of the United States Supreme Court, graduated from Stanford Law School in 1952. She served as a justice from 1981 to 2006 and was known for her moderate and pragmatic approach to interpreting the law.",
    img: "http://drive.google.com/uc?export=view&id=1ZBHFkgq0ojvpSgwPrJH6sYNZrmjo06Rs",
    univeristyId: 4,
  },
  {
    name: "Sally Ride",
    title: "The first American woman in space",
    description:
      "Sally Ride: The first American woman in space, earned a degree in English and physics from Stanford in 1973. She later joined NASA and flew on the space shuttle Challenger in 1983, becoming the first American woman in space.",
    img: "http://drive.google.com/uc?export=view&id=1glg6HXR7p1Lbsc_WnVKR8AeczmKMO1eL",
    univeristyId: 4,
  },
  {
    name: "Jerry Yang",
    title: "Co-founder of Yahoo!",
    description:
      "Jerry Yang: Co-founder of Yahoo!, graduated with a degree in electrical engineering from Stanford in 1995. He co-founded Yahoo! in 1995, quickly becoming one of the world's most popular and successful websites.",
    img: "http://drive.google.com/uc?export=view&id=1VY1Dc6jiFqLhAmcx4W2N86OLUOowsUE0",
    univeristyId: 4,
  },
  {
    name: "Michael Bloomberg",
    title: "a businessman and politician",
    description:
      "Michael Bloomberg, a businessman and politician graduated from Johns Hopkins in 1964 with a degree in electrical engineering. He went on to found Bloomberg L.P., a financial services, and mass media company, and served as the 108th Mayor of New York City.",
    img: "http://drive.google.com/uc?export=view&id=1he-BhvKUlBtaZ83-PBEPb0qs3DF6KFSz",
    univeristyId: 5,
  },
  {
    name: "Milton Friedman",
    title: "the economist and statistician",
    description:
      "Milton Friedman, the economist and statistician, graduated from Johns Hopkins in 1932 with a PhD in economics. He is widely considered one of the most influential economists of the 20th century and was a leading advocate of free-market economics.",
    img: "http://drive.google.com/uc?export=view&id=102BYehQrisBRlZ9rNSXlVN-HTIMiWdc4",
    univeristyId: 5,
  },
  {
    name: "Adam Smith",
    title: "the economist",
    description:
      "Adam Smith, the economist, graduated from Johns Hopkins in 1976 with a PhD in economics. He is widely considered one of the most influential economists of all time and is best known for his work in classical economics.",
    img: "http://drive.google.com/uc?export=view&id=1LRwCbCuGUdppVGjqzgTkwkQOuhTT0cZw",
    univeristyId: 5,
  },
  {
    name: "Jhumpa Lahiri",
    title: "the author and translator",
    description:
      "Jhumpa Lahiri, the author and translator, graduated from Johns Hopkins in 1989 with a Master's degree in English. She has won numerous awards for her writing, including the Pulitzer Prize for Fiction in 2000.",
    img: "http://drive.google.com/uc?export=view&id=1zUb21e_CHr7kR5EZhbDj9vShPZNS6EXZ",
    univeristyId: 5,
  },
  {
    name: "Ruth Bader Ginsburg",
    title: "the Associate Justice of the Supreme Court of the United States",
    description:
      "Ruth Bader Ginsburg, the Associate Justice of the Supreme Court of the United States, graduated from Johns Hopkins in 1954 with a Bachelor's degree in government. She served as a judge on the Supreme Court from 1993 until she died in 2020.",
    img: "http://drive.google.com/uc?export=view&id=1IbJjElzy9Y36kFUhiTRtWNbgDPGUXiiG",
    univeristyId: 5,
  },
  {
    name: "Steven Chu",
    title: "the physicist and professor",
    description:
      "Steven Chu, the physicist and professor graduated from Johns Hopkins in 1976 with a PhD in physics. He went on to win the Nobel Prize in Physics in 1997 and served as the United States Secretary of Energy from 2009 to 2013.",
    img: "http://drive.google.com/uc?export=view&id=19iptA1SaphoSaKEWnRpFqtI-IR43yY9C",
    univeristyId: 5,
  },
  {
    name: "Paul Sarbanes",
    title: "the politician",
    description:
      "Paul Sarbanes, the politician, graduated from Johns Hopkins in 1954 with a Bachelor's degree in economics. He served as a United States Senator from Maryland from 1977 to 2007.",
    img: "http://drive.google.com/uc?export=view&id=1dDyRy30JRE0vHaTVOj6a3RtiOrQRoYm2",
    univeristyId: 5,
  },
  {
    name: "Martin O'Malley",
    title: "the politician",
    description:
      "Martin O'Malley, the politician, graduated from Johns Hopkins in 1985 with a Bachelor's degree in arts and sciences. He served as the Governor of Maryland from 2007 to 2015.",
    img: "http://drive.google.com/uc?export=view&id=1r6TZirHir2MIA6xT0cTANJAs5APZLTGk",
    univeristyId: 5,
  },
  {
    name: "Philip Roth",
    title: "the author",
    description:
      "Philip Roth, the author, graduated from Johns Hopkins in 1954 with a Bachelor's degree in English. He is widely considered one of the most influential American authors of the 20th century.",
    img: "http://drive.google.com/uc?export=view&id=1xMMNOOKz0PnC4rktFbeUP9-fGyHiHhK8",
    univeristyId: 5,
  },
  {
    name: "Richard Nixon",
    title: "the 37th President of the United States",
    description:
      "Richard Nixon, the 37th President of the United States, graduated from Duke in 1937 with a law degree. He served as the President of the United States from 1969 to 1974.",
    img: "http://drive.google.com/uc?export=view&id=1219nCrJqYbWqz4yABbWbgjBhS2WvuAIE",
    univeristyId: 6,
  },
  {
    name: "Robert F. Kennedy",
    title: "the politician and attorney",
    description:
      "Robert F. Kennedy, the politician and attorney, graduated from Duke in 1951 with a law degree. He served as the United States Attorney General from 1961 to 1964 and as a United States Senator from New York from 1965 until his assassination in 1968.",
    img: "http://drive.google.com/uc?export=view&id=1CwZXLshBXdxeVgYW2_gixglY0a_gmgDs",
    univeristyId: 6,
  },
  {
    name: "Melinda Gates",
    title: "the philanthropist",
    description:
      "Melinda Gates, the philanthropist, graduated from Duke in 1986 with a computer science and economics degree. She is the co-chair of the Bill and Melinda Gates Foundation, one of the largest private foundations in the world.",
    img: "http://drive.google.com/uc?export=view&id=1WeYJJM8e5e3gMZCIzcBfTadTnmjle_ch",
    univeristyId: 6,
  },
  {
    name: "Daniel Kahneman",
    title: "the psychologist and economist",
    description:
      "Daniel Kahneman, the psychologist and economist, graduated from Duke in 1954 with a PhD in psychology. He is widely considered one of the most influential psychologists of the 20th century and won the Nobel Prize in Economics in 2002 for his work in behavioral economics.",
    img: "http://drive.google.com/uc?export=view&id=15vesUYI66QLQuR-ixgsHG6WUuns-h_eL",
    univeristyId: 6,
  },
  {
    name: "David Rubenstein",
    title: "the businessman and philanthropist",
    description:
      "David Rubenstein, the businessman and philanthropist, graduated from Duke in 1970 with a law degree. He is the co-founder and co-executive chairman of The Carlyle Group and is also known for his philanthropy, particularly in education and the arts.",
    img: "http://drive.google.com/uc?export=view&id=1a-vcCBuTM-6xdJy7uEpTcmcU--Z5cy-8",
    univeristyId: 6,
  },
  {
    name: "James B. Duke",
    title: "a businessman and philanthropist",
    description:
      "James B. Duke, a businessman and philanthropist, graduated from Duke in 1892. He was the primary benefactor of the University, and his philanthropy helped establish the school as one of the leading universities in the United States.",
    img: "http://drive.google.com/uc?export=view&id=1dW8sNVxh8IX3VkLmn_wLW1WsW0kJaxHR",
    univeristyId: 6,
  },
  {
    name: "William J. Clinton",
    title: "the 42nd President of the United States",
    description:
      "William J. Clinton, the 42nd President of the United States, graduated from Duke in 1968 with a law degree. He served as the President of the United States from 1993 to 2001.",
    img: "http://drive.google.com/uc?export=view&id=1hym_FHCLJ1GKmWuzsI6bPQkVAEfQagJp",
    univeristyId: 6,
  },
  {
    name: "Robert Zemeckis",
    title: "the film director",
    description:
      "Robert Zemeckis, the film director, graduated from Duke in 1973 with a degree in radio, television, and motion pictures. He is known for directing hit films such as 'Forrest Gump' and 'Back to the Future.'",
    img: "http://drive.google.com/uc?export=view&id=1mbNjPmQZMMdpM1ENQzLSDfQUEtUZqytC",
    univeristyId: 6,
  },
  {
    name: "Michael J. Fox",
    title: "the actor",
    description:
      "Michael J. Fox, the actor, graduated from Duke in 1982 with a degree in political science. He is best known for his role as Marty McFly in the 'Back to the Future' trilogy and his work as a Parkinson's disease advocate.",
    img: "http://drive.google.com/uc?export=view&id=1WDL1ftfHgn8edH7y8G_aZERDSTtv0DbD",
    univeristyId: 6,
  },
  {
    name: "Daniel Webster",
    title: "a lawyer, politician",
    description:
      "Daniel Webster, a lawyer, politician, and statesman, graduated from Dartmouth in 1801 and served as a U.S. Congressman, U.S. Senator, and U.S. Secretary of State. He was also known for his speeches and orations, particularly his famous 'Second Reply to Hayne' speech",
    img: "http://drive.google.com/uc?export=view&id=1bKfV3SDtuZCrsMPgzXXn3oJ2rLbC64EV",
    univeristyId: 7,
  },
  {
    name: "Theodor Geisel",
    title: "children's author and illustrator",
    description:
      "Theodor Geisel, also known as Dr. Seuss, was a children's author and illustrator who graduated from Dartmouth in 1925. Dr. Seuss's books have become cultural icons, and his work continues to be widely read and enjoyed by children and adults alike.",
    img: "http://drive.google.com/uc?export=view&id=1myCOYUYy7XQdbtavqY3-el_IfQAeiyHT",
    univeristyId: 7,
  },
  {
    name: "Robert Frost",
    title: "a Pulitzer Prize-winning poet",
    description:
      "Robert Frost, a Pulitzer Prize-winning poet, earned an honorary degree from Dartmouth in 1939. Frost's poetry is known for its exploration of rural life and the natural world, and his work is widely studied in American literature courses.",
    img: "http://drive.google.com/uc?export=view&id=1rzH4AW99xpLklw4w7FCaSjhc7NC1wgML",
    univeristyId: 7,
  },
  {
    name: "Nelson A. Rockefeller",
    title: "the 41st Vice President of the United States",
    description:
      "Nelson A. Rockefeller, the 41st Vice President of the United States, graduated from Dartmouth in 1930. He served as the Governor of New York and was a prominent figure in the Republican party, known for his liberal views and philanthropy.",
    img: "http://drive.google.com/uc?export=view&id=1eOEYRdntWvXPPDOmSkmMlxatvr7saQAa",
    univeristyId: 7,
  },
  {
    name: "Jeffrey Katzenberg",
    title: "a film producer and executive",
    description:
      "Jeffrey Katzenberg, a film producer and executive, graduated from Dartmouth in 1974. He is known for his work as the co-founder of Dreamworks Animation, which produced films such as Shrek, Kung Fu Panda, and How to Train Your Dragon.",
    img: "http://drive.google.com/uc?export=view&id=1yLMuRPqw8Q0riacaX-_9hqJX-c7zXG9m",
    univeristyId: 7,
  },
  {
    name: "Mindy Kaling",
    title: "an actress, comedian, writer, and producer",
    description:
      "Mindy Kaling is an actress, comedian, writer, and producer who graduated from Dartmouth in 2001. She is best known for her work as an actress, writer, and producer on the popular television show The Office.",
    img: "http://drive.google.com/uc?export=view&id=1XkxOfLFPLjAcEV0FQ7W81noOlYRweQ5_",
    univeristyId: 7,
  },
  {
    name: "Brian Williams",
    title: "journalist and television news anchor",
    description:
      "Brian Williams, a journalist and television news anchor graduated from Dartmouth in 1981. Williams is known for his work as the anchor of NBC Nightly News and as a correspondent for the network's various news programs.",
    img: "http://drive.google.com/uc?export=view&id=1EFFYI56KN6u4vp21QxeXxrTJByCo1ARQ",
    univeristyId: 7,
  },
  {
    name: "Peter Thiel",
    title: "businessman, philanthropist, and political activist",
    description:
      "Peter Thiel, a businessman, philanthropist, and political activist, graduated from Dartmouth in 1989. Thiel is known for co-founding PayPal, an online payment system, and as an early investor in companies such as Facebook and Airbnb.",
    img: "http://drive.google.com/uc?export=view&id=1Zddu2udoS6rCe9HvTA9olMkqlfURHgbp",
    univeristyId: 7,
  },
  {
    name: "Amy Poehler",
    title: "a comedian, actress, writer, and producer",
    description:
      "Amy Poehler, a comedian, actress, writer, and producer, graduated from Dartmouth in 1993. Poehler is known for her work as an actress, comedian, and writer on the television show Saturday Night Live.",
    img: "http://drive.google.com/uc?export=view&id=1hCCPmm5cCeP1WDXIu6LibIyQ5xJ0CHPO",
    univeristyId: 7,
  },
  //  {
  //   name: "Barack Obama",
  //   title: "44th President of the United States",
  //   description: "Barack Obama, 44th President of the United States, earned a J.D. from Columbia Law School. He is the first African American President of the United States and served two terms from 2009 to 2017.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // },{
  //   name: "Hillary Clinton",
  //   title: "former U.S. Secretary of State",
  //   description: "Hillary Clinton, former U.S. Secretary of State and 2016 Democratic Presidential nominee earned a J.D. from Columbia Law School. She is the first woman to have been nominated for President by a major political party in the United States.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Ruben Harutunian",
  //   title: "the former Special Assistant to Secretaries of State",
  //   description: "Ruben Harutunian, the former Special Assistant to Secretaries of State Clinton and Kerry, has a B.A. in Middle East and Asian Languages and Cultures from Columbia College.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Ban Ki-moon",
  //   title: "8th Secretary-General of the United Nations",
  //   description: "Ban Ki-moon, 8th Secretary-General of the United Nations, who earned a Master of Public Administration from the School of International and Public Affairs",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Joseph Stiglitz",
  //   title: "Nobel laureate economist and professor at Columbia Business School",
  //   description: "Joseph Stiglitz, Nobel laureate economist and professor at Columbia Business School, is widely recognized for his work on income inequality and globalization.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Langston Hughes",
  //   title: "a prominent poet and writer of the Harlem Renaissance",
  //   description: "Langston Hughes, a prominent poet and writer of the Harlem Renaissance, was known for his works about the black experience in America during the 20th century.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Edwin 'Buzz' Aldrin",
  //   title: "astronaut and the second person to walk on the moon",
  //   description: "Edwin 'Buzz' Aldrin, astronaut and the second person to walk on the moon earned a Doctor of Science in Astronautics from Columbia University.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Warren Buffett",
  //   title: "business magnate and chairman of Berkshire Hathaway",
  //   description: "Warren Buffett, business magnate and chairman of Berkshire Hathaway, attended Columbia Business School and learned under-investment legend, Benjamin Graham.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Robert A. Millikan",
  //   title: "physicist and Nobel laureate in Physics",
  //   description: "Robert A. Millikan, physicist and Nobel laureate in Physics, studied and later taught at Columbia University.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "Ruth Bader Ginsburg",
  //   title: "Associate Justice of the United States Supreme Court",
  //   description: "Ruth Bader Ginsburg, Associate Justice of the United States Supreme Court, earned her LL.B from Columbia Law School.",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // },  {
  //   name: "",
  //   title: "",
  //   description: "",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "",
  //   title: "",
  //   description: "",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // }, {
  //   name: "",
  //   title: "",
  //   description: "",
  //   img: "http://drive.google.com/uc?export=view&id=",
  //   univeristyId: 8,
  // },
  {
    name: "Warren Buffett",
    title: "One of the most successful investors in history",
    description:
      "Warren Buffett: One of the most successful investors in history, Buffett graduated from the Wharton School of the University of Pennsylvania in 1951 with a Bachelor of Science in Economics.",
    img: "http://drive.google.com/uc?export=view&id=1HeDJ18ntpQGqPomE0OpZZeTakHg7OxeK",
    univeristyId: 10,
  },
  {
    name: "Donald Trump",
    title: "The 45th President of the United States",
    description: "Donald Trump: The 45th President of the United States, Trump graduated from the Wharton School at UPenn in 1968 with a Bachelor of Science in Economics.",
    img: "http://drive.google.com/uc?export=view&id=1Jv3z2Zh7yK_Im8H2XYUC-61W75QzvicO",
    univeristyId: 10,
  },
  {
    name: "Elon Musk",
    title: "The founder and CEO of SpaceX and Tesla Motors",
    description: "Elon Musk: The founder and CEO of SpaceX and Tesla Motors, Musk attended the University of Pennsylvania for two years before transferring to the University of Pretoria in South Africa.",
    img: "http://drive.google.com/uc?export=view&id=1DE3f-sScGMOQVAMvQto0Hsil5xDiU816",
    univeristyId: 10,
  },{
    name: "Evan Williams",
    title: "The co-founder of Twitter",
    description: "Evan Williams: The co-founder of Twitter, Williams graduated from the University of Nebraska in 1996 and later attended the University of Pennsylvania for one semester.",
    img: "http://drive.google.com/uc?export=view&id=1-Vz-9qO1RusrLl8GDY1H91gL6z_wPt-K",
    univeristyId: 10,
  },{
    name: "Jeff Bezos",
    title: "The founder and CEO of Amazon",
    description: "Jeff Bezos: The founder and CEO of Amazon, Bezos graduated from Princeton University but attended the University of Pennsylvania for undergraduate studies.",
    img: "http://drive.google.com/uc?export=view&id=19Yb2YB7xkZ4sBHIhz8_AuAVp2XXiQE2a",
    univeristyId: 10,
  },{
    name: "Judd Apatow",
    title: "A comedian, writer, director, and producer",
    description: "Judd Apatow: A comedian, writer, director, and producer, Apatow graduated from the University of Southern California, but he attended the University of Pennsylvania for one semester.",
    img: "http://drive.google.com/uc?export=view&id=1x5Ad2-7ox_hchCpQBpt0oTD0dN5AQ-qH",
    univeristyId: 10,
  },{
    name: "Bill Clinton",
    title: "The 42nd President of the United States",
    description: "Bill Clinton: The 42nd President of the United States, Clinton graduated from Georgetown University but later pursued a graduate degree at the Wharton School at UPenn.",
    img: "http://drive.google.com/uc?export=view&id=1IGcezU5e0k96KR0CGGU-41okKmH_GMzK",
    univeristyId: 10,
  },{
    name: "William S. Paley",
    title: "A businessman and media mogul",
    description: "William S. Paley: A businessman and media mogul, Paley was the founder and chairman of CBS, one of the world's largest and most influential broadcast media companies.",
    img: "http://drive.google.com/uc?export=view&id=1nBkszKOKrkpgkT817UJ5NH9t2svfQ_1m",
    univeristyId: 10,
  },{
    name: "J.D. Salinger",
    title: "An American novelist",
    description: "J.D. Salinger: An American novelist, short-story writer, and reclusive author of The Catcher in the Rye, one of the most popular and controversial novels of the 20th century.",
    img: "http://drive.google.com/uc?export=view&id=1ytPTvjo6N1HFKkI6IYQU1LlykT6IxfHE",
    univeristyId: 10,
  },{
    name: "M. Night Shyamalan",
    title: "A filmmaker and screenwriter",
    description: "M. Night Shyamalan: A filmmaker and screenwriter, Shyamalan graduated from the University of Pennsylvania's Annenberg School for Communication with a degree in film.",
    img: "http://drive.google.com/uc?export=view&id=1eoRpgs35nAAmMe1Gi8GEVp0ikAIX0unW",
    univeristyId: 10,
  },{
    name: "John Legend",
    title: "A singer, songwriter and actor",
    description: "John Legend: A singer, songwriter, and actor, Legend graduated from the University of Pennsylvania in 1999 with a Bachelor of Arts in English. He is a multiple Grammy award-winning artist and has also won an Academy Award, Golden Globe and Emmy.",
    img: "http://drive.google.com/uc?export=view&id=1ujeDFCCqDCVhWHxpa8vo4O2aZbGiPx7g",
    univeristyId: 10,
  },{
    name: "Noam Chomsky",
    title: "A linguist, philosopher, and political commentator",
    description: "Noam Chomsky: A linguist, philosopher, and political commentator, Chomsky received his PhD in Linguistics from the University of Pennsylvania in 1955. He is one of the most influential and widely read intellectuals of our time.",
    img: "http://drive.google.com/uc?export=view&id=1kVgCvjEHpaAriiLdGdLbh7ATBdj0KzzB",
    univeristyId: 10,
  },
];

module.exports = {
  notableAlumni,
};
