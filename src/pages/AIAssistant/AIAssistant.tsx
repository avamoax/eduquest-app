import { Layout } from '@/components/layout';
import AIVideoCall from '@/components/common/AIVideoCall/AIVideoCall';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

export default function AIAssistant() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="h-screen flex flex-col">
        <AIVideoCall 
          onClose={() => navigate(ROUTES.HOME)}
        />
      </div>
    </Layout>
  );
}
