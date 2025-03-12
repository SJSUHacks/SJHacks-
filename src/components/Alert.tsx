interface AlertProps {
    show: boolean;
    message: string;
    onClose: () => void;
  }
  
  export default function Alert({ show, message, onClose }: AlertProps) {
    if (!show) return null
    
    return (
      <div className="custom-alert">
        <div className="custom-alert-content">
          <p>{message}</p>
          <button onClick={onClose} className="close-alert-btn">OK</button>
        </div>
      </div>
    )
  }