import React, { Component } from 'react';
import Button from './button';

class Buttons extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <Button keyValue={7} />
                    <Button keyValue={8} />
                    <Button keyValue={9} />
                    <Button keyValue={"AC"} />
                </div>
                <div>
                    <Button keyValue={4} />
                    <Button keyValue={5} />
                    <Button keyValue={6} />
                    <Button keyValue={"/"} />
                </div>
                <div>
                    <Button keyValue={1} />
                    <Button keyValue={2} />
                    <Button keyValue={3} />
                    <Button keyValue={"*"} />
                </div>
                <div>
                    <Button keyValue={"="} />
                    <Button keyValue={"0"} />
                    <Button keyValue={"+"} />
                    <Button keyValue={"-"} />
                </div>
            </div>
        );
    }
}

export default Buttons;