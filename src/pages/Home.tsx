import React from 'react';
import { ShoppingCartIcon, GraduationCapIcon, GhostIcon, GiftIcon, ListIcon } from 'lucide-react';
import { IntentSelection } from '../components/IntentSelection';
interface HomeProps {
  onIntentSelect: () => void;
}
export function Home({
  onIntentSelect
}: HomeProps) {
  const shoppingIntents = [{
    id: 'usual',
    title: 'Buy the usual',
    icon: <ShoppingCartIcon size={24} />,
    color: 'bg-blue-100 text-blue-600'
  }, {
    id: 'school',
    title: 'Back-to-school shopping',
    icon: <GraduationCapIcon size={24} />,
    color: 'bg-green-100 text-green-600'
  }, {
    id: 'halloween',
    title: 'Halloween shopping',
    icon: <GhostIcon size={24} />,
    color: 'bg-orange-100 text-orange-600'
  }, {
    id: 'birthday',
    title: "Gifting for kids' birthday",
    icon: <GiftIcon size={24} />,
    color: 'bg-purple-100 text-purple-600'
  }, {
    id: 'custom',
    title: 'Custom shopping list',
    icon: <ListIcon size={24} />,
    color: 'bg-gray-100 text-gray-600'
  }];
  return <div className="p-4 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Welcome!</h1>
      <p className="text-gray-600 mb-6">What brings you to the club today?</p>
      <div className="grid gap-4">
        {shoppingIntents.map(intent => <IntentSelection key={intent.id} title={intent.title} icon={intent.icon} colorClass={intent.color} onClick={onIntentSelect} />)}
      </div>
    </div>;
}