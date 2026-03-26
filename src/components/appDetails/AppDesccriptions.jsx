const AppDescription = ({ description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
      <div className="text-gray-600 space-y-4 leading-relaxed">
        <p>{description}</p>
        <p>
          A unique feature of this app is the integration of task lists with timers. 
          You can assign each task to a specific session, making your schedule more structured.
        </p>
        <p>
          For people who struggle with procrastination, the app provides motivational streaks 
          and achievements. Completing multiple sessions unlocks milestones.
        </p>
      </div>
    </div>
  );
};

export default AppDescription;