//FUNÇAO PARA CONVERTER UMA TEMPERATURA DE CELSIUS PARA FAHRENHEIT
function converter() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(celsius)) {
        resultado.textContent = "Por favor, digite um valor válido.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    resultado.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

// FUNÇAO PARA LER UM NUMERO E DIZER SE E INPA OU PAR 


import java.util.Scanner;

public class ParOuImpar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();

        if (numero % 2 == 0) {
            System.out.print(numero + " é PAR");
        } else {
            System.out.print(numero + " é ÍMPAR");
        }

        if (numero > 0) {
            System.out.println(" e POSITIVO ✅");
        } else if (numero < 0) {
            System.out.println(" e NEGATIVO ❌");
        } else {
            System.out.println(" e é ZERO 🔵");
        }

        scanner.close();
    }
}

// funçao ler dois nmeros e diser qual e o maior 


import java.util.Scanner;

public class MaiorNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Entrada dos números
        System.out.print("Digite o primeiro número: ");
        int num1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int num2 = scanner.nextInt();

        // Comparação
        if (num1 > num2) {
            System.out.println("O maior número é: " + num1);
        } else if (num2 > num1) {
            System.out.println("O maior número é: " + num2);
        } else {
            System.out.println("Os dois números são iguais!");
        }

        scanner.close();
    }
}




//ler 10 numeros e mostras quantos sao pares 

import java.util.Scanner;

public class ContarPares {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pares = 0;

        for (int i = 1; i <= 10; i++) {
            System.out.print("Digite o " + i + "º número: ");
            int num = scanner.nextInt();

            if (num % 2 == 0) {
                pares++;
            }
        }

        System.out.println("Quantidade de números pares: " + pares);
        scanner.close();
    }
}
