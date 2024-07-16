type Item = {
    id: number;
    name: string;
    icon: string;
  };
  
  const items: Item[] = [
    { id: 1, name: 'Item 1', icon: '/assets/icons/icon1.svg' },
    { id: 2, name: 'Item 2', icon: '/assets/icons/icon2.svg' },
    { id: 3, name: 'Item 3', icon: '/assets/icons/icon3.svg' },
    { id: 4, name: 'Item 4', icon: '/assets/icons/icon1.svg' },
    { id: 5, name: 'Item 5', icon: '/assets/icons/icon2.svg' },
    { id: 6, name: 'Item 6', icon: '/assets/icons/icon3.svg' },
    { id: 7, name: 'Item 7', icon: '/assets/icons/icon1.svg' },
    { id: 8, name: 'Item 8', icon: '/assets/icons/icon2.svg' },
    { id: 9, name: 'Item 9', icon: '/assets/icons/icon3.svg' },
    { id: 10, name: 'Item 10', icon: '/assets/icons/icon1.svg' },
  ];

  const Skills = () => {
    return (
      <div className="grid grid-cols-4 gap-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded shadow flex flex-col items-center"
          >
            <img src={item.icon} alt={`${item.name} icon`} className="w-12 h-12 mb-2" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    );
  };

  export default Skills;