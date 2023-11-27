import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nombreValido, setNombreValido] = useState(false);
  const [apellidoValido, setApellidoValido] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const [telefonoValido, setTelefonoValido] = useState(false);
  const [passwordValido, setPasswordValido] = useState(false);
  const [confirmPasswordValido, setConfirmPasswordValido] = useState(false);
  const [mostrarErrores, setMostrarErrores] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function actualizarNombre(e) {
    setNombreValido(e.target.value.length > 3);
    nombreValido ? setNombre(e.target.value) : setNombre("");
  }

  function actualizarApellido(e) {
    setApellidoValido(e.target.value.length > 3);
    apellidoValido ? setApellido(e.target.value) : setApellido("");
  }

  function actualizarEmail(e) {
    let emailChar = /^\S+[a-zA-Z]+@+\S+\.\S+$/;
    setEmailValido(emailChar.test(e.target.value));
    emailValido ? setEmail(e.target.value) : setEmail("");
  }

  function actualizarTelefono(e) {
    let telChar = /[+0123456789]/;
    setTelefonoValido(telChar.test(e.target.value));
    telefonoValido ? setTelefono(e.target.value) : setTelefono("");
  }

  function actualizarPassword(e) {
    const nuevaPassword = e.target.value;
    const esPasswordValida = nuevaPassword.length >= 8;

    setPasswordValido(esPasswordValida);

    if (esPasswordValida) {
      setPassword(nuevaPassword);
    } else {
      setPassword("");
    }
  }

  function actualizarConfirmarPassword(e) {
    if (e.target.value === password && passwordValido) {
      setConfirmPasswordValido(true);
      setConfirmPassword(e.target.value);
    } else {
      setConfirmPasswordValido(false);
      setConfirmPassword("");
    }
  }

  function enviarDatos(e) {
    e.preventDefault();
    if (
      !nombreValido ||
      !apellidoValido ||
      !emailValido ||
      !telefonoValido ||
      !passwordValido ||
      !confirmPasswordValido
    ) {
      setMostrarErrores(true);
    } else {
      setShowToast(true);
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
      setPassword("");
      setConfirmPassword("");
    }
  }

  
  return (
    <Box
    w="30%"
    mx="auto"
    mt={20}
    bg="gray.700"
    border="1px"
    borderColor="gray.100"
    borderRadius="md"
    p="5"
    color='white'
    display="flex"
    flexDirection="column"
    justifyContent="center"
    >
      <Box textAlign='center'>
      <h2>Registrarse</h2>
      </Box>
      <form>
        <FormControl id="nombre" isInvalid={!nombreValido && mostrarErrores}>
          <FormLabel>Nombre:</FormLabel>
          <Input type="text" onChange={actualizarNombre} color='black' bg='blue.100' _focus={{ borderColor: "gray.200", boxShadow: "none" }}/>
          <FormErrorMessage>
            El nombre ingresado no es válido
          </FormErrorMessage>
        </FormControl>

        <FormControl id="apellido" isInvalid={!apellidoValido && mostrarErrores}>
          <FormLabel>Apellido:</FormLabel>
          <Input type="text" onChange={actualizarApellido} color='black' bg='blue.100' _focus={{ borderColor: "gray.200", boxShadow: "none" }} />
          <FormErrorMessage>
            El apellido ingresado no es válido
          </FormErrorMessage>
        </FormControl>

        <FormControl id="email" isInvalid={!emailValido && mostrarErrores}>
          <FormLabel>Email:</FormLabel>
          <Input type="email" onChange={actualizarEmail} color='black' bg='blue.100' _focus={{ borderColor: "gray.200", boxShadow: "none" }} />
          <FormErrorMessage>
            El email ingresado no es válido
          </FormErrorMessage>
        </FormControl>

        <FormControl id="telefono" isInvalid={!telefonoValido && mostrarErrores}>
          <FormLabel>Teléfono:</FormLabel>
          <Input type="tel" onChange={actualizarTelefono} color='black' bg='blue.100' _focus={{ borderColor: "gray.200", boxShadow: "none" }} />
          <FormErrorMessage>
            El teléfono ingresado no es válido
          </FormErrorMessage>
        </FormControl>

        <FormControl id="password" isInvalid={!passwordValido && mostrarErrores}>
          <FormLabel>Contraseña:</FormLabel>
          <Input type="password" onChange={actualizarPassword} color='black' bg='blue.100' _focus={{ borderColor: "gray.200", boxShadow: "none" }} />
          <FormErrorMessage>
            La contraseña ingresada no es válida
          </FormErrorMessage>
        </FormControl>

        <FormControl
          id="confirmPassword"
          isInvalid={!confirmPasswordValido && mostrarErrores}
        >
          <FormLabel>Confirmar contraseña:</FormLabel>
          <Input type="password" onChange={actualizarConfirmarPassword} color='black' bg='blue.100' _focus={{ borderColor: "gray.200", boxShadow: "none" }} />
          <FormErrorMessage>
            Las contraseñas no coinciden
          </FormErrorMessage>
        </FormControl>
        <Box textAlign='center'>
        <Button mt={4} colorScheme="blue" onClick={enviarDatos} type="submit" w="40%" >
          Enviar
        </Button>
        </Box>
      </form>

      {showToast && (
        <Alert status="success" color='black' mt={4}>
          <AlertIcon />
          Registro completado!
          <CloseButton
            onClick={() => setShowToast(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
    </Box>
  );
};
