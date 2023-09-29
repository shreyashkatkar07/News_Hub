import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "KABC-TV" },
      author: null,
      title:
        "Powerball jackpot climbs to $835 million after no one overcomes awful odds to win top prize - KABC-TV",
      description:
        "The Powerball jackpot climbed to an estimated $835 million after no one beat the immense odds Monday night and won the top prize.",
      url: "https://abc7.com/powerball-lottery-jackpot-785-million/13828780/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/13829284_powerball-clean-TN-img.jpg?w=1600",
      publishedAt: "2023-09-26T05:37:30Z",
      content:
        "DES MOINES, Iowa -- The Powerball jackpot climbed to an estimated $835 million after no one beat the immense odds Monday night and won the top prize.\r\nThe winning numbers were: 10, 12, 22, 36, 50 and… [+1195 chars]",
    },
    {
      source: { id: null, name: "KCRA Sacramento" },
      author: "Ashley Zavala",
      title:
        "Gov. Newsom signs bill to classify child sex trafficking as a serious felony in California - KCRA Sacramento",
      description:
        "Gov. Gavin Newsom on Monday announced he signed a bill that will classify child sex trafficking as a serious felony in California.",
      url: "https://www.kcra.com/article/california-bill-child-sex-trafficking-felony-signed/45310822",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ap22271666211653.jpg?crop=1.00xw:0.846xh;0,0.0660xh&resize=1200:*",
      publishedAt: "2023-09-26T05:36:00Z",
      content:
        "SACRAMENTO, Calif. —Gov. Gavin Newsom on Monday announced he signed a bill that will classify child sex trafficking as a serious felony in California.\r\nClassifying child sex trafficking as a serious … [+1941 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Ian Lovett",
      title:
        "U.S. Abrams Tanks Reach Ukraine. Is It a Case of Too Little, Too Late? - The Wall Street Journal",
      description:
        "The Abrams are among the world,s most sophisticated tanks and offer technical advantages that older tanks can,t match",
      url: "https://www.wsj.com/world/u-s-abrams-tanks-reach-ukraine-is-it-a-case-of-too-little-too-late-f1fb5061",
      urlToImage: "https://images.wsj.net/im-857631/social",
      publishedAt: "2023-09-26T04:18:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jake Tapper, Jeremy Herb, Makayla Humphrey",
      title:
        "Cassidy Hutchinson,s new book reveals a Trump White House even more chaotic than previously known - CNN",
      description:
        "In her new book “Enough,” former White House aide Cassidy Hutchinson paints the closing days of the Trump White House as even more chaotic and lawless than she previously disclosed in her shocking televised testimony last summer. President Donald Trump lashes…",
      url: "https://www.cnn.com/2023/09/26/politics/cassidy-hutchinson-book-trump-white-house-chaos/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220628133821-20-jan-6-hearing-0628-hutchinson.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-26T04:01:00Z",
      content:
        "In her new book Enough, former White House aide Cassidy Hutchinson paints the closing days of the Trump White House as even more chaotic and lawless than she previously disclosed in her shocking tele… [+14327 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Los Angeles Rams vs. Cincinnati Bengals | 2023 Week 3 Game Highlights - NFL",
      description:
        "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
      url: "https://www.youtube.com/watch?v=QPJ3dBmhLGI",
      urlToImage: "https://i.ytimg.com/vi/QPJ3dBmhLGI/maxresdefault.jpg",
      publishedAt: "2023-09-26T03:41:19Z",
      content: null,
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: null,
      title:
        "Monday Night Football highlights: Eagles thump Bucs, Bengals outlast Rams - FOX Sports",
      description:
        "Week 3 of the NFL season came to a close Monday. Check out the top plays from Monday Night Football!",
      url: "https://www.foxsports.com/stories/nfl/monday-night-football-live-updates-eagles-buccaneers-rams-bengals",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/09/1408/814/09.21.23_NFL-Top-Plays_16x9.jpg?ve=1&tl=1",
      publishedAt: "2023-09-26T03:31:51Z",
      content:
        "Week 3 of the NFL season comes to a close Monday with a matchup of two undefeated teams. \r\nThe Tampa Bay Buccaneers (2-1) hosted the Philadelphia Eagles (3-0) and the home team suffered its first los… [+4761 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Jason Owens",
      title:
        "Joe Burrow good enough, but calf worries persist in win over Rams - Yahoo Sports",
      description:
        "The Bengals picked up a desperately needed win while their offense continued to struggle with an ailing Joe Burrow.",
      url: "https://sports.yahoo.com/joe-burrow-good-enough-but-calf-worries-persist-in-win-over-rams-032620038.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/VhQbznTzzYrQU1U4oK9D3w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/7cfb8b80-5c16-11ee-b95e-7937fb858d20",
      publishedAt: "2023-09-26T03:26:00Z",
      content:
        "Joe Burrow and the Bengals have their first win of the season. (Dylan Buell/Getty Images) (Dylan Buell via Getty Images)\r\nJoe Burrow was far from his best Monday night.\r\nBut he was good enough for a … [+3789 chars]",
    },
    {
      source: { id: null, name: "Eonline.com" },
      author: "Gabrielle Chung",
      title:
        "Pretty Little Liars' Torrey DeVitto Is Engaged to Jared LaPine: See Her Gorgeous Ring - E! NEWS",
      description:
        "Pretty Little Liars and The Vampire Diaries alum Torrey DeVitto announced her engagement to Jared LaPine, showing off the diamond ring he proposed with during a hike in the woods.",
      url: "https://www.eonline.com/news/1386377/pretty-little-liars-torrey-devitto-is-engaged-to-jared-lapine-see-her-gorgeous-ring",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2023825/cr_1200x1200-230925190323-352443484_226507126827239_2208757857978004209_n.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2023-09-26T03:20:33Z",
      content:
        "Torrey DeVittois rocking some pretty, not-so-little bling.\r\nThe Pretty Little Liars alum announced her engagement to director Jared LaPine on Sept. 25, posting photos of herself wearing an emerald cu… [+892 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Allie Griffin",
      title:
        "Biden fumbles acronym during Pacific Islands forum speech: 'Doesn,t matter what we call it,' he jokes - New York Post ",
      description:
        "“Today I,m pleased to announce we,re working with Congress to invest $40 billion in our Pacific Islands Infrastructure Initiative,” he told the round table of leaders.",
      url: "https://nypost.com/2023/09/25/biden-fumbles-acronym-during-pacific-islands-forum-speech/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000045030475.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2023-09-26T02:55:00Z",
      content:
        "President Biden botched a simple acronym while speaking to leaders from the Pacific Islands Monday in his latest verbal blunder. \r\nBiden, 80, got stumped as he was trying to dictate the abbreviation … [+1748 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "Here's who made the second Republican presidential debate - POLITICO",
      description:
        "Seven candidates made the cut, but former President Donald Trump is counterprogramming another of the Republican National Committee,s marquee events.",
      url: "https://www.politico.com/news/2023/09/25/rnc-announces-candidates-for-another-trump-less-debate-00118087",
      urlToImage:
        "https://static.politico.com/00/8f/529a1bc34e02971b7451328b28f8/election-2024-trump-93286.jpg",
      publishedAt: "2023-09-26T02:25:55Z",
      content:
        "Notably missing from that group is former President Donald Trump, who will instead be in Michigan on Wednesday for a rally. Hes scheduled to deliver a speech at 8 p.m. Eastern Time one hour before th… [+2669 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "Michaela Zee",
      title:
        "SAG-AFTRA Members Vote in Favor of Video Game Strike Authorization - Variety",
      description:
        "SAG-AFTRA members have voted in favor of a strike authorization against the video game industry.",
      url: "https://variety.com/2023/biz/news/sag-aftra-vote-authorize-video-game-strike-1235735114/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2015/09/sag-aftra-logo.jpg?w=989&h=557&crop=1",
      publishedAt: "2023-09-26T01:55:00Z",
      content:
        "SAG-AFTRA members have voted to authorize a strike against the video game industry. \r\nThe vote was 98.32% in favor of the strike authorization against 10 major video game companies, with 34,687 membe… [+2268 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: null,
      title:
        "A blast in Nagorno-Karabakh injures more than 200, while thousands flee to Armenia - NPR",
      description:
        "The explosion at fuel storage facility wounded more than 200 people, the Nagorno-Karabakh human rights ombudsman said. Meanwhile, thousands of Nagorno-Karabakh residents have fled to Armenia.",
      url: "https://www.npr.org/2023/09/25/1201668404/explosion-nagorno-karabakh-armenia-azerbaijan",
      urlToImage:
        "https://media.npr.org/assets/img/2023/09/25/ap23268334888253_wide-03468dc33305d65e94a8558295c4290f2f807a92-s1400-c100.jpg",
      publishedAt: "2023-09-26T01:11:56Z",
      content:
        "An ethnic Armenian boy from Nagorno-Karabakh looks on from a car upon arrival in Armenia's Goris, in the Syunik region, Armenia, on Monday. Thousands of Armenians have streamed out of Nagorno-Karabak… [+8568 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Yi Wei Wong, Swati Pandey",
      title:
        "Dimon Warns World May Not Be Prepared for Fed at 7%, TOI Reports - Bloomberg",
      description:
        "The world may not be prepared for a worst-case scenario of Federal Reserve benchmark interest rates hitting 7% along with stagflation, JPMorgan Chase &amp; Co. CEO Jamie Dimon said in an interview with the Times of India in Mumbai.",
      url: "https://www.bloomberg.com/news/articles/2023-09-26/dimon-warns-world-may-not-be-prepared-for-fed-at-7-toi-lmzl7rao",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZFGb6BzexWw/v0/1200x800.jpg",
      publishedAt: "2023-09-26T01:00:42Z",
      content:
        "The world may not be prepared for a worst-case scenario of Federal Reserve benchmark interest rates hitting 7% along with stagflation, JPMorgan Chase &amp; Co. CEO Jamie Dimon said in an interview Bl… [+268 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Long Covid-19 impacts some adults, blood biomarkers, new study finds - NBC News",
      description:
        "Long Covid-19 impacts 6 percent of adults, according to the CDC, and includes symptoms such as fatigue, brain fog and memory difficulties. Now a new study of...",
      url: "https://www.youtube.com/watch?v=2kBL8uMMVcc",
      urlToImage: "https://i.ytimg.com/vi/2kBL8uMMVcc/maxresdefault.jpg",
      publishedAt: "2023-09-26T00:45:00Z",
      content: null,
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Makini Brice",
      title:
        "US Senator Menendez rejects calls to step down from Congress - Reuters",
      description:
        "U.S. Democratic Senator Bob Menendez on Monday ignored calls to resign from his seat, denying wrongdoing and vowing to stay in Congress after prosecutors charged him and his wife with taking bribes from three New Jersey businessmen.",
      url: "https://www.reuters.com/world/us/us-senator-menendez-vows-stay-congress-fight-bribery-charges-2023-09-25/",
      urlToImage:
        "https://www.reuters.com/resizer/QF6oJGjN5aSrMSM6aG4g1nWAIhg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZGOGSMFDANLCJD4BG3PXCKUZTA.jpg",
      publishedAt: "2023-09-26T00:38:00Z",
      content:
        "WASHINGTON, Sept 25 (Reuters) - U.S. Democratic Senator Bob Menendez on Monday ignored calls to resign from his seat, denying wrongdoing and vowing to stay in Congress after prosecutors charged him a… [+4388 chars]",
    },
    {
      source: { id: null, name: "Los Angeles Times" },
      author: "Wendy Lee",
      title:
        "WGA got a deal. When can Hollywood get back to work? - Los Angeles Times",
      description:
        "The Writers Guild of America and major studios reached a tentative agreement on Sunday night. But significant challenges remain before the entertainment industry can fully return to the business of making and promoting movies and TV shows.",
      url: "https://www.latimes.com/entertainment-arts/business/story/2023-09-25/writers-strike-wga-deal-return-to-work-hollywood-amptp",
      urlToImage:
        "https://ca-times.brightspotcdn.com/dims4/default/698b8b9/2147483647/strip/true/crop/4757x2497+0+181/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F80%2Fb1%2Fa423b7d448a6b3d4dc8e90144a07%2F1322095-me-sag-aftra-strike-27-mjc.jpg",
      publishedAt: "2023-09-26T00:11:00Z",
      content:
        "Hollywood breathed a collective sigh of relief Sunday night when the Writers Guild of America and the major studios announced a tentative deal for a new contract.\r\nThe nearly five-month strike among … [+5499 chars]",
    },
    {
      source: { id: null, name: "Eleven Warriors" },
      author: null,
      title:
        "The Frame vs. The Moment: Ohio State Football Relives The Final Drive That Pushed the Buckeyes Past Notre Dame in Their Top-10 Road Matchup - Eleven Warriors",
      description:
        "The Frame vs. The Moment: Ohio State football relives its game-winning drive that pushed the Buckeyes past Notre Dame in a top-10 road matchup.",
      url: "https://www.elevenwarriors.com/ohio-state-football/2023/09/141192/the-frame-vs-the-moment-ohio-state-football-relives-the-final-drive-that-pushed-the-buckeyes-past-notre-dame-in",
      urlToImage:
        "https://www.elevenwarriors.com/sites/default/files/styles/904x490/public/c/2023/09/141192_h.jpg?itok=d4ZAAHQ1",
      publishedAt: "2023-09-26T00:03:17Z",
      content:
        'Ohio State football relived "The Final Drive" on Monday.\r\nIn a series of social media posts, the Ohio State media team released photos and videos of the Buckeyes\' 15-play, 65-yard drive that pushed O… [+1226 chars]',
    },
    {
      source: { id: null, name: "WDSU New Orleans" },
      author: "Nicole Via y Rada",
      title:
        "Louisiana governor files federal emergency declaration for saltwater intrusion - WDSU New Orleans",
      description:
        "Gov. Edwards is asking President Biden to approve an emergency declaration for saltwater intrusion.",
      url: "https://www.wdsu.com/article/louisiana-saltwater-federal/45311234",
      urlToImage:
        "https://kubrick.htvapps.com/vidthumb/65bdf183-4632-48da-8fb6-2cd071aed097/afa643ca-6532-48ff-8773-98363bf6cb9d.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2023-09-25T23:59:00Z",
      content:
        "Louisiana Gov. John Bel Edwards is asking the federal government for help to address saltwater intrusion in the Mississippi River. \r\nEdwards filed a Federal Emergency Declaration on Monday. \r\nIf appr… [+711 chars]",
    },
    {
      source: { id: null, name: "fox8.com" },
      author: "Laura Morrison",
      title:
        "Thrill riders stuck upside down for nearly 30 minutes at Canadian amusement park - WJW FOX 8 News Cleveland",
      description:
        "A thrill ride turned into a nightmare over the weekend, when some Canada,s Wonderland amusement park attendees were stuck upside-down for nearly a half hour.",
      url: "https://fox8.com/news/thrill-riders-stuck-upside-down-for-nearly-30-minutes-at-canadian-amusement-park/",
      urlToImage:
        "https://fox8.com/wp-content/uploads/sites/12/2023/09/GettyImages-92931771.jpg?w=1280",
      publishedAt: "2023-09-25T23:53:35Z",
      content:
        "**Related Video Above: Couple arrested for indecent exposure on Cedar Point Ferris wheel.**\r\nCANADA (WJW) A thrill ride turned into a nightmare over the weekend, when some Canada,s Wonderland amuseme… [+1044 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: null,
      title:
        "David McCallum, star of TV series 'The Man From U.N.C.L.E.' and 'NCIS,' dies at 90 - NPR",
      description:
        "The Scottish-born actor's career included roles on stage and in movies, but the 1960s spy series made him a household name and his role as a quirky pathologist 40 years later brought him fame again.",
      url: "https://www.npr.org/2023/09/25/1201658391/david-mccallum-star-of-tv-series-the-man-from-u-n-c-l-e-and-ncis-dies-at-90",
      urlToImage:
        "https://media.npr.org/assets/img/2023/09/25/ap23268772303196_wide-308d5bbd376f538d0fbca809786a77f8c59344d9-s1400-c100.jpg",
      publishedAt: "2023-09-25T23:44:11Z",
      content:
        'David McCallum, then-star of the NBC-TV series The Invisible Man" is shown during an interview at NBC studios in New York in 1975. McCallum, who became a teen heartthrob in the hit series The Man Fro… [+6658 chars]',
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h3>News Hub - Top Headlines</h3>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title.slice(0, 30)}
                    description={element.description.slice(0, 45)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
