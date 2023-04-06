import { useState } from 'react';
import useAccountsApi from '../../hooks/useAccountsApi';
import SuccesMessageTxData from './SuccesMessageTxData';
import {
    FormContainer,
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledTextArea,
    SubmitButton
} from '../../assets/styles/AddAccountStyles';



const AddAccountForm = () => {
    const { addAccount } = useAccountsApi();
    const [formData, setFormData] = useState({
        name: '',
        accountType: '',
        balance: '',
        description: ''
    });
    const [successMessage, setSuccessMessage] = useState(null);
    const [forceUpdate, setForceUpdate] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await addAccount(formData);
        setSuccessMessage(result);
        setForceUpdate(!forceUpdate);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <FormContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>
                        Nombre de la cuenta:
                        <StyledInput type="text" name="name" value={formData.name} onChange={handleChange} />
                    </StyledLabel>
                    <StyledLabel>
                        Tipo de cuenta:
                        <StyledInput type="text" name="accountType" value={formData.accountType} onChange={handleChange} />
                    </StyledLabel>
                    <StyledLabel>
                        Saldo:
                        <StyledInput type="number" name="balance" value={formData.balance} onChange={handleChange} />
                    </StyledLabel>
                    <StyledLabel>
                        Descripción:
                        <StyledTextArea name="description" value={formData.description} onChange={handleChange} />
                    </StyledLabel>
                    <SubmitButton type="submit"> Agregar cuenta </SubmitButton>
                </StyledForm>
            </FormContainer>
            <SuccesMessageTxData successMessage={successMessage} />
        </div>
    );
};

export default AddAccountForm;
