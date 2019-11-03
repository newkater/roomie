import React, {Component} from "react";
import "./register-form.css";
import {Control, Field, Input, Label, Select} from "bloomer";
import {COUNTRIES} from "../../utils";

export default class RegisterForm extends Component {

    render() {
        const { page } = this.props;

        if (page === 3) {
            return (
                <form>
                    <Field>
                        <Label isSize="medium">В каком городе вы ищете жилье?</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Максимальное число сожителей</Label>
                        <Control>
                            <Input type="text" placeholder='' isSize="medium"/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Период аренды</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>1 месяц</option>
                                <option>3 месяца</option>
                                <option>6 месяцев</option>
                                <option>9 месяцев</option>
                                <option>1 год</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Языки!!!!!!!!!</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>1 месяц</option>
                                <option>3 месяца</option>
                                <option>6 месяцев</option>
                                <option>9 месяцев</option>
                                <option>1 год</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Есть ли вредные привычки</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>Нет</option>
                                <option>Курение</option>
                                <option>Алкоголь</option>
                                <option>Я доверяю людям ;(</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Дополнительная информация</Label>
                        <Control>
                            <textarea  style={{"width": "100%"}} type="text" placeholder='' isSize="medium"/>
                        </Control>
                    </Field>
                </form>
            )
        }

        if (page === 2) {
            return (
                <form>
                    <Field>
                        <Label isSize="medium">ФИО</Label>
                        <Control>
                            <Input type="text" placeholder='Александр Сергеевич Пушкин' isSize="medium"/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Пол</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>Женский</option>
                                <option>Мужской</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родная страна</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родной город</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Университет или колледж</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Специальность</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Контактный телефон</Label>
                        <Control>
                            <Input type="tel" isSize="medium" placeholder=''/>
                        </Control>
                    </Field>
                </form>
            )
        }

        return (
            <form>
                <Field>
                    <Label isSize="medium">Электронная почта</Label>
                    <Control>
                        <Input type="email" placeholder='example@gmail.com' isSize="medium"/>
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Пароль</Label>
                    <Control>
                        <Input type="password" isSize="medium" placeholder='password'/>
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Повторите пароль</Label>
                    <Control>
                        <Input type="password" isSize="medium" placeholder='password'/>
                    </Control>
                </Field>
            </form>
        )
    }
}