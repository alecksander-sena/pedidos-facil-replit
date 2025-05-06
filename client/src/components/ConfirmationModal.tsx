import { Button } from '@/components/ui/button';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmationModal({ isOpen, onClose }: ConfirmationModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 md:mx-0 p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
          <i className="ri-check-line text-4xl text-green-500"></i>
        </div>
        <h2 className="text-2xl font-poppins font-bold mb-2">Pedido Confirmado!</h2>
        <p className="text-[#737373] mb-6">
          Seu pedido foi enviado com sucesso. Em breve entraremos em contato para confirmar.
        </p>
        <Button 
          className="w-full bg-[#af1a2d] hover:bg-[#9a1626] text-white py-3 rounded-lg font-medium"
          onClick={onClose}
        >
          Voltar ao Menu
        </Button>
      </div>
    </div>
  );
}
