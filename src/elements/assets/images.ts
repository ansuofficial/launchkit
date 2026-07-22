/**
 * Curated photography for templates.
 * Unlayer-style marketplace templates lead with real photos, not illustration walls.
 * Sources: Unsplash (stable image IDs, sized for email ~1200w).
 */

const u = (id: string, w = 1200, h = 630) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const TEMPLATE_IMAGES = {
  /** Product launch - clean product / analytics UI photography */
  productLaunchHero: u("photo-1551288049-bebda4e38f71", 1200, 640),
  productLaunchSecondary: u("photo-1460925895917-afdab827c52f", 1200, 700),

  /** Welcome - calm workspace, people-light */
  welcomeHero: u("photo-1497366216548-37526070297c", 1200, 600),
  welcomeTeam: u("photo-1522071820081-009f0129c71c", 800, 600),

  /** Feature announcement - modern product surface */
  featureHero: u("photo-1519389950473-47ba0277781c", 1200, 600),
  featureDetail: u("photo-1551650975-87deedd944c3", 800, 600),

  /** Newsletter - editorial / desk / writing */
  newsletterHero: u("photo-1504711434969-e33886168f5c", 1200, 560),
  newsletterArticle1: u("photo-1551434678-e076c223a692", 600, 400),
  newsletterArticle2: u("photo-1516321318423-f06f85e504b3", 600, 400),

  /** Changelog - subtle tech / code atmosphere */
  changelogHero: u("photo-1517694712202-14dd9538aa97", 1200, 480),

  /** Event - conference / gathering */
  eventHero: u("photo-1540575467063-178a50c2df87", 1200, 600),
  eventVenue: u("photo-1505373877841-8d25f7d46678", 800, 500),

  /** Customer success - celebration / partnership */
  successHero: u("photo-1552664730-d307ca884978", 1200, 560),
  successTeam: u("photo-1600880292203-757bb62b4baf", 800, 500),

  /** Security - abstract infrastructure (calm, not alarm-red) */
  securityHero: u("photo-1563986768609-322da13575f3", 1200, 520),

  /** Documents - quiet professional photography */
  docProposal: u("photo-1454165804606-c3d57bc86b40", 1200, 400),
  docBrief: u("photo-1484480974693-6ca0a78fb36b", 1200, 400),
  docMeeting: u("photo-1517245386807-bb43f82c33c4", 1200, 400),
  docRoadmap: u("photo-1507925921958-8a62f3d1a50d", 1200, 400),

  /** Pages - full-bleed marketing photography (Unlayer marketplace style) */
  pageHeroProduct: u("photo-1551434678-e076c223a692", 1400, 900),
  pageHeroTeam: u("photo-1522071820081-009f0129c71c", 1200, 900),
  pageFeatureWorkflow: u("photo-1556761175-5973dc0f32e7", 1000, 800),
  pageFeatureAnalytics: u("photo-1551288049-bebda4e38f71", 1000, 800),
  pageFeatureCollab: u("photo-1600880292203-757bb62b4baf", 1000, 800),
  pagePricingBg: u("photo-1497366216548-37526070297c", 1400, 700),
  pageWebinarSpeaker: u("photo-1475721027785-f74eccf877e2", 1200, 900),
  pageWebinarAudience: u("photo-1540575467063-178a50c2df87", 1200, 700),
  pageAgencyHero: u("photo-1497366811353-6870744d04b2", 1400, 900),
  pageAgencyWork1: u("photo-1460925895917-afdab827c52f", 800, 600),
  pageAgencyWork2: u("photo-1519389950473-47ba0277781c", 800, 600),
  pageAgencyWork3: u("photo-1516321318423-f06f85e504b3", 800, 600),
  pageTestimonial: u("photo-1573496359142-b8d87734a5a2", 400, 400),
  pageAvatar1: u("photo-1507003211169-0a1dd7228f2d", 200, 200),
  pageAvatar2: u("photo-1494790108377-be9c29b29330", 200, 200),
  pageAvatar3: u("photo-1472099645785-5658abf4ff4e", 200, 200),
} as const;

export type TemplateImageKey = keyof typeof TEMPLATE_IMAGES;
