module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/pages/homepage_mission_driven_impact_hub.html',
        'http://localhost:3000/pages/programs_hub_interactive_impact_explorer.html',
        'http://localhost:3000/pages/get_involved_central_engagement_matching_platform.html',
        'http://localhost:3000/pages/impact_stories_multimedia_success_showcase.html',
        'http://localhost:3000/pages/about_ecosystem_organizational_transparency_hub.html',
        'http://localhost:3000/pages/resource_center_educational_impact_hub.html',
        'http://localhost:3000/pages/community_platform_supporter_connection_network.html',
        'http://localhost:3000/pages/contact_multi_channel_connection_hub.html',
        'http://localhost:3000/pages/donation_experience_impact_driven_giving_portal.html'
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        preset: 'desktop'
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.85 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 3000 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}; 