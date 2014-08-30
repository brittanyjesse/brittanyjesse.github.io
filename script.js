(function() {
  'use strict';
  var app = angular.module('resume', []);

  app.value('resumeValues', (function() {
    return {
      contact: {
        name: 'Brittany Jesse',
        email: 'me@brittanyjesse.com',
        phone: '801-372-9795',
        website: 'brittanyjesse.com',
        url: 'http://brittanyjesse.com'
      },
      education: {
        degree: 'Achievement',
        graduationDate: 'August 2014',
        school: 'Mountainland Applied Technology College',
        schoolUrl: 'http://mlatc.edu/',
        items: [
          'Some items here',
          'About your awesome performance',
          'And other things related to your education'
        ]
      },
      experience: [
        {
          company: 'Company 1 Name',
          companyUrl: 'http://www.example.com',
          jobTitle: 'Cord Holder',
          timeRange: 'December 2012 - Present',
          achievements: [
            'Stayed alive and kept my brother alive while he mowed the lawn.',
            'Assisted in getting the lawn mowed by encouraging my brother by holding the cord.'
          ]
        },
        {
          company: 'Company 2 Name',
          companyUrl: 'http://www.example.com',
          jobTitle: 'Amazing Person',
          timeRange: 'May 2013 - August 2013',
          achievements: [
            'Did this thing that made this amazingly good impact to my employer',
            'Did this other thing that resulted in a specific positive direction for my employer'
          ]
        }
      ],
      skillsAndAchievements: [
        {
          title: 'Cool things I\'ve done',
          content: 'Thing 1, thing 2, thing 3'
        },
        {
          title: 'Volunteer',
          content: 'Service in the church or other things that show how awesome you are'
        },
        {
          title: 'Hobbies',
          content: 'Things that make you human :-)'
        }
      ]
    };
  })());

  app.controller('MainCtrl', function($scope, resumeValues, $sce) {
    angular.forEach(resumeValues.skillsAndAchievements, function(item, index) {
      resumeValues.skillsAndAchievements[index].content = $sce.trustAsHtml(item.content);
    });
    angular.forEach(resumeValues.experience, function(item, index) {
      var achievements = resumeValues.experience[index].achievements;
      angular.forEach(achievements, function(item, index) {
        achievements[index] = $sce.trustAsHtml(item);
      });
    });
    angular.forEach(resumeValues.education.items, function(item, index) {
      resumeValues.education.items[index] = $sce.trustAsHtml(item);
    });
    angular.extend($scope, resumeValues);
  });
})();
