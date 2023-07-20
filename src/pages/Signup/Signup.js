import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom/dist'

export default function Signup() {

    const { form, onChangeInputs, cleanFields } = useForm({ nomeUsuario: '', email: '', senha: '', confirmaSenha: '' })

    const navigate = useNavigate()


    const enviarCadastro = (e) => {
        e.preventDefault()
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.senha === form.confirmaSenha) {
            console.log(form)
            cleanFields()
        } else {
            alert("Senha está diferente!")
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    name='nomeUsuario'
                    id='nome'
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
                    type='text'
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                    type='email'
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    name='senha'
                    id='senha'
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                    pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$'
                    title='Deve conter ao menos uma letra minúscula, uma letra maiúscula, um caractere espercial e ao menos 8 dos caracteres mencionados'

                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    name='confirmaSenha'
                    id='confirma-senha'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
