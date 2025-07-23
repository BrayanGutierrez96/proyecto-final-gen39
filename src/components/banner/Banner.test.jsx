import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Banner from "./Banner";

describe('Banner', ()=>{
    render(<Banner/>)
    test('Deberia de mostrar el texto en el componente', ()=>{
        const botones = screen.findAllByRole('presentacion')

        expect(screen.getByText(/IPHONE/i)).toBeDefined()
        expect(screen.getAllByAltText('iphone14'))
        expect(botones).toBeDefined()
    })
    test('Deberia de cambiar el color del boton', ()=>{
        const boton1 = screen.getByTestId('boton-0')
        const boton2 = screen.getByTestId('boton-1')

        fireEvent.click(boton1)
        

        expect(boton1.classList.contains('bg-red-400')).toBe(true)
            expect(boton2.classList.contains('bg-stone-400')).toBe(true)

        fireEvent.click(boton2)

        expect(boton2.classList.contains('bg-red-400')).toBe(true)
        expect(boton1.classList.contains('bg-stone-400')).toBe(true)
    })
})