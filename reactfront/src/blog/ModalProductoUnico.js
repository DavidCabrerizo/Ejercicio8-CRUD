import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'right', // Alinea el botón de cerrar a la derecha
};

export default function BasicModal({ titulo, contenido, onClose }) {
  return (
    <Modal
      open={Boolean(titulo && contenido)}
      onClose={onClose}
      aria-labelledby="modal-modal-titulo"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button onClick={onClose} style={{ position: 'absolute', top: 0, right: 0 }}>
          <button>X</button>
        </Button>
        <Typography id="modal-modal-titulo" variant="h6" component="h2">
          {titulo}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {contenido}
        </Typography>
      </Box>
    </Modal>
  );
}