import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { toast } from 'react-toastify';
import HCSTextInput from '../utilities/customFormControls/HCSTextInput';
export default function ProductAdd() {

    const initialValues = {
        productName: 'Test ürünü',
        unitPrice: 10,
    }

    const schema = Yup.object().shape({
        productName: Yup.string().required('Ürün adı zorunludur'),
        unitPrice: Yup.number().required('Fiyat zorunludur'),
    })
    
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    let productService = new ProductService()
                    productService.addProduct(values).then(result => {
                        if (result.status === 200) {
                            toast.success('Ürün başarıyla eklendi')
                        } else {
                            toast.error('Ürün eklenirken bir hata oluştu')
                        }
                    })
                }}
            >
                <FormikForm className="ui form">
                    <HCSTextInput name='productName' placeholder='Ürün Adı' />
                    <HCSTextInput name='unitPrice' placeholder='Fiyat' />
                    <Form.Field>
                        <Field as="select" name="categoryId" className="ui dropdown">
                            <option value="">Kategori Seçiniz</option>
                            <option value="1">İçecekler</option>
                            <option value="2">Yiyecekler</option>
                            <option value="3">Teknoloji</option>
                        </Field>
                    </Form.Field>
                    <Form.Field>
                        <Button color='green' type='submit' className='ui button'>Ekle</Button>
                    </Form.Field>
                </FormikForm>
            </Formik>
        </div>
    )
}
