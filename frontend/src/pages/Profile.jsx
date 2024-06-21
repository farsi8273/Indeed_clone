import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ResumeSection from '../components/ResumeSection';
import ImprovementSection from '../components/ImprovementSection';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ProfileHeader name="Add name" email="moaamir85320@gmail.com" />

      <ResumeSection />

      <div className="bg-white mt-4">
        <ImprovementSection 
          title="Qualifications" 
          description="Highlight your skills and experience." 
        />
        <ImprovementSection 
          title="Job preferences" 
          description="Save specific details like minimum desired pay and schedule." 
        />
        <ImprovementSection 
          title="Hide jobs with these details" 
          description="Manage the qualifications or preferences used to hide jobs from your search." 
        />
        <ImprovementSection 
          title="Ready to work" 
          description="Let employers know that you're available to start working as soon as possible." 
        />
      </div>
    </div>
  );
};

export default Profile;
