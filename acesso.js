package fundamentos;

import java.util.Random;
import java.util.Scanner;

public class projeto {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Bem Vindo(a) a Aposta.bet!");
		System.out.println("Regras:");
		System.out.println("Aposta mínima de 5 centavos!");
		System.out.println("O número escolhido será substituído na tabela pelo número 0");
		System.out.println("Não é possível escolher o mesmo número mais de uma vez!");
		System.out.println("Os números válidos para escolha são entre 1 e 50");
		System.out.println("Boa Sorte!");
		System.out.println();
		System.out.println("Escolha uma opção");
		System.out.println("1 - Jogador X Jogador \n2 - Jogador X Máquina");
		int jogador = scan.nextInt();
		while (jogador != 1 && jogador != 2) {
			System.err.println("Opção inválida! Digite o número 1 ou 2");
			jogador = scan.nextInt();
		}
		switch (jogador) {
		case 1:
			jogadorXjogador(scan);
			break;
		case 2:
			jogadorXmaquina(scan);
			break;
		}
		scan.close();
	}

	public static void jogadorXjogador(Scanner scan2) {
		Scanner scan = new Scanner(System.in);
		Random rand = new Random();
		int tentativa = 0;
		int jogadores = 0;
		double aposta1 = 0;
		double aposta2 = 0;
		int numTentativa = 1;
		int[] numEscolhidos = new int[50];
		int escolhas = 0;
		String corVerde = "\u001B[32m";
		String corVermelho = "\u001B[31m";
		String resetCor = "\u001B[0m";
		System.out.println("Como devemos te chamar jogador 1?");
		String nome1 = scan.next();
		System.out.println("Como devemos te chamar jogador 2?");
		String nome2 = scan.next();
		System.out.printf("Informe o valor de sua aposta %s:\n", nome1);
		aposta1 = scan.nextDouble();
		while (aposta1 < 0.05) {
			System.err.println("Valor inválido! Aposte um valor acima de R$0,05");
			aposta1 = scan.nextDouble();
		}
		System.out.printf("Informe o valor de sua aposta %s:\n", nome2);
		aposta2 = scan.nextDouble();
		while (aposta2 < aposta1) {
			System.err.printf("Valor inválido! Aposte um valor igual ou acima do apostado pelo(a) jogador(a) %s\n", nome1);
			aposta2 = scan.nextDouble();
		}
		System.out.println("Vamos começar!");
		int numSorteado = rand.nextInt(49) + 1;
		System.out.println(numSorteado);
		int[] numeros = new int[50];
		for (int i = 0; i < 50; i++) {
			numeros[i] = i + 1;
		}
		System.out.println("Escolha um número:");
		for (int hashtag = 0; hashtag <= 63; hashtag++) {
			System.out.print("#");
		}
		System.out.println();
		for (int hashtag2 = 0; hashtag2 < 63; hashtag2++) {
			if (hashtag2 == 0) {
				System.out.printf("#");
			} else if (hashtag2 == 62) {
				System.out.printf(" #");
			} else {
				System.out.printf("_");
			}
		}
		System.out.println();
		System.out.printf(
				"#| %d   | %d   | %d   | %d   | %d   | %d   | %d   | %d   | %d   | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|__|_|_|_|_|_|_|_|_|__| #\n",
				numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5], numeros[6], numeros[7],
				numeros[8], numeros[9], numeros[10], numeros[11], numeros[12], numeros[13], numeros[14], numeros[15],
				numeros[16], numeros[17], numeros[18], numeros[19], numeros[20], numeros[21], numeros[22], numeros[23],
				numeros[24], numeros[25], numeros[26], numeros[27], numeros[28], numeros[29], numeros[30], numeros[31],
				numeros[32], numeros[33], numeros[34], numeros[35], numeros[36], numeros[37], numeros[38], numeros[39],
				numeros[40], numeros[41], numeros[42], numeros[43], numeros[44], numeros[45], numeros[46], numeros[47],
				numeros[48], numeros[49]);
		for (int espaco = 0; espaco <= 63; espaco++) {
			if (espaco == 0) {
				System.out.print("#");
			} else if (espaco == 63) {
				System.out.print("#");
			} else {
				System.out.print(" ");
			}
		}
		System.out.println();
		for (int hashtag = 0; hashtag < 64; hashtag++) {
			System.out.print("#");
		}
		System.out.println();
		do {
			if (jogadores % 2 == 0) {
				System.out.printf("Jogador 1 : %s\n", nome1);
				jogadores++;
			} else {
				System.out.printf("Jogador 2 : %s\n", nome2);
				jogadores++;
			}
			System.out.println("Digite sua tentativa: ");
			tentativa = scan.nextInt();
			boolean numRepetido = false;
			for (int i = 0; i < escolhas; i++) {
				if (numEscolhidos[i] == tentativa) {
					numRepetido = true;
					break;
				}
			}
			if (numRepetido) {
				System.err.println("Este  número já foi escolhido");
				jogadores++;
			} else {
				numEscolhidos[escolhas] = tentativa;
				escolhas++;
			}
			if (tentativa >= 1 && tentativa <= 50) {
				if (tentativa == numSorteado) {
					System.out.print(corVerde);
					System.out.printf("O número sorteado foi: %d\n", numSorteado);
					if (jogadores % 2 == 0) {
						System.out.printf("Parabéns %s, você acertou o número e ganhou!\n", nome2);
					} else {
						System.out.printf("Parabéns %s, você acertou o número e ganhou!\n", nome1);
					}
					if (numTentativa <= 2) {
						double ganho = (aposta1 + aposta2) * 2;
						System.out.printf("Seu prêmio é R$%.2f\n", ganho);
					} else if (numTentativa > 2 && numTentativa <= 10) {
						double ganho = aposta1 + aposta2;
						System.out.printf("Seu prêmio é R$%.2f\n", ganho);
					} else if (numTentativa > 10 && numTentativa <= 30) {
						double ganho = (aposta1 + aposta2) - ((aposta1 + aposta2) * 0.05);
						System.out.printf("Seu prêmio é R$%.2f\n", ganho);
					} else if (numTentativa > 30 && numTentativa <= 49) {
						double ganho = (aposta1 + aposta2) - ((aposta1 + aposta2) * 0.1);
						System.out.printf("Seu prêmio é R$%.2f\n", ganho);
					} else {
						double ganho = (aposta1 + aposta2) - ((aposta1 + aposta2) * 0.5);
						System.out.printf("Seu prêmio é R$%.2f\n", ganho);
					}
					System.out.print(resetCor);
				} else {
					for (int a = 0; a < 50; a++) {
						if (numeros[a] == tentativa) {
							numeros[a] = 0;
							break;
						}
					}
					System.out.print(corVermelho);
					System.out.println("Tente novamente.");
					System.out.print(resetCor);
					numTentativa++;
					for (int hashtag = 0; hashtag <= 62; hashtag++) {
						System.out.print("#");
					}
					System.out.println();
					for (int hashtag2 = 0; hashtag2 < 61; hashtag2++) {
						if (hashtag2 == 0) {
							System.out.printf("# ");
						} else if (hashtag2 == 60) {
							System.out.printf(" #");
						} else {
							System.out.printf("_");
						}
					}
					System.out.println();
					System.out.printf(
						    "#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|__|_|_|_|_|_|_|_|_|__|#\n",
						    numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5], numeros[6],
						    numeros[7], numeros[8], numeros[9], numeros[10], numeros[11], numeros[12], numeros[13],
						    numeros[14], numeros[15], numeros[16], numeros[17], numeros[18], numeros[19], numeros[20],
						    numeros[21], numeros[22], numeros[23], numeros[24], numeros[25], numeros[26], numeros[27],
						    numeros[28], numeros[29], numeros[30], numeros[31], numeros[32], numeros[33], numeros[34],
						    numeros[35], numeros[36], numeros[37], numeros[38], numeros[39], numeros[40], numeros[41],
						    numeros[42], numeros[43], numeros[44], numeros[45], numeros[46], numeros[47], numeros[48],
						    numeros[49]);
					for (int espaco = 0; espaco <= 62; espaco++) {
						if (espaco == 0) {
							System.out.print("#");
						} else if (espaco == 62) {
							System.out.print("#");
						} else {
							System.out.print(" ");
						}
					}
					System.out.println();
					for (int hashtag = 0; hashtag < 63; hashtag++) {
						System.out.print("#");
					}
					System.out.println();
				}
			} else {
				System.out.print(corVermelho);
				System.out.println("Número inválido, tente novamente:");
				System.out.print(resetCor);
				jogadores++;
			}
		} while (tentativa != numSorteado);
		scan.close();
	}

	public static void jogadorXmaquina(Scanner scan3) {
		Scanner scan = new Scanner(System.in);
		Random rand = new Random();
		int numTentativa = 1;
		int[] numEscolhidos = new int[50];
		int escolhas = 0;
		String nome2 = "Máquina";
		String corVerde = "\u001B[32m";
		String corVermelho = "\u001B[31m";
		String resetCor = "\u001B[0m";
		System.out.println("Como devemos te chamar jogador 1?");
		String nome1 = scan.next();
		System.out.printf("Informe o valor de sua aposta %s:\n", nome1);
		double aposta = scan.nextDouble();
		while (aposta < 0.05) {
			System.err.println("Valor inválido! Aposte um valor acima de R$0,05");
			aposta = scan.nextDouble();
		}
		System.out.println("Vamos começar!");
		int numSorteado = rand.nextInt(49) + 1;
		System.out.println(numSorteado);
		int[] numeros = new int[50];
		for (int i = 0; i < 50; i++) {
			numeros[i] = i + 1;
		}
		System.out.println("Escolha um número:");
		for (int hashtag = 0; hashtag <= 63; hashtag++) {
			System.out.print("#");
		}
		System.out.println();
		for (int hashtag2 = 0; hashtag2 < 63; hashtag2++) {
			if (hashtag2 == 0) {
				System.out.printf("#");
			} else if (hashtag2 == 62) {
				System.out.printf(" #");
			} else {
				System.out.printf("_");
			}
		}
		System.out.println();
		System.out.printf(
				"#| %d   | %d   | %d   | %d   | %d   | %d   | %d   | %d   | %d   | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|_____________________| #"
						+ "\n#| %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | %d  | #\n"
						+ "#|__|_|_|_|_|_|_|_|_|__| #\n",
				numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5], numeros[6], numeros[7],
				numeros[8], numeros[9], numeros[10], numeros[11], numeros[12], numeros[13], numeros[14], numeros[15],
				numeros[16], numeros[17], numeros[18], numeros[19], numeros[20], numeros[21], numeros[22], numeros[23],
				numeros[24], numeros[25], numeros[26], numeros[27], numeros[28], numeros[29], numeros[30], numeros[31],
				numeros[32], numeros[33], numeros[34], numeros[35], numeros[36], numeros[37], numeros[38], numeros[39],
				numeros[40], numeros[41], numeros[42], numeros[43], numeros[44], numeros[45], numeros[46], numeros[47],
				numeros[48], numeros[49]);
		for (int espaco = 0; espaco <= 63; espaco++) {
			if (espaco == 0) {
				System.out.print("#");
			} else if (espaco == 63) {
				System.out.print("#");
			} else {
				System.out.print(" ");
			}
		}
		System.out.println();
		for (int hashtag = 0; hashtag < 64; hashtag++) {
			System.out.print("#");
		}
		System.out.println();
		int tentativa = 0;
		int jogadores = 0;
		do {
			if (jogadores % 2 == 0) {
				System.out.printf("Jogador 1 : %s\n", nome1);
				System.out.println("Digite sua tentativa: ");
				tentativa = scan.nextInt();
				jogadores++;
			} else {
				System.out.printf("Jogador 2 : %s\n", nome2);
				tentativa = rand.nextInt(50) + 1;
				System.out.println(tentativa);
				jogadores++;
			}
			boolean numRepetido = false;
			for (int i = 0; i < escolhas; i++) {
				if (numEscolhidos[i] == tentativa) {
					numRepetido = true;
					break;
				}
			}
			if (numRepetido) {
				System.out.print(corVermelho);
				System.out.println("Este  número já foi escolhido");
				System.out.print(resetCor);
				
				jogadores++;
			} else {
				numEscolhidos[escolhas] = tentativa;
				escolhas++;
			}
			if (tentativa >= 1 && tentativa <= 50) {
				if (tentativa == numSorteado) {
					System.out.print(corVerde);
					System.out.printf("O número sorteado foi: %d\n", numSorteado);
					if (jogadores % 2 == 0) {
						System.err.printf("Não foi dessa vez, a %s ganhou!\n", nome2);
					} else {
						System.out.printf("Parabéns %s, você acertou o número e ganhou!\n", nome1);
					}
					if (numTentativa % 2 != 0) {
						if (numTentativa == 1) {
							double ganho = (aposta * 2) * 2;
						System.out.printf("O prêmio é R$%.2f\n", ganho);
						} else if (numTentativa > 2 && numTentativa <= 10) {
						double ganho = aposta * 2;
						System.out.printf("O prêmio é R$%.2f\n", ganho);
					} else if (numTentativa > 10 && numTentativa <= 30) {
						double ganho = (aposta * 2) - ((aposta * 2) * 0.05);
						System.out.printf("O prêmio é R$%.2f\n", ganho);
					} else if (numTentativa > 30 && numTentativa <= 48) {
						double ganho = (aposta * 2) - ((aposta * 2) * 0.1);
						System.out.printf("O prêmio é R$%.2f\n", ganho);
					} else {
						double ganho = (aposta * 2) - ((aposta * 2) * 0.5);
						System.out.printf("O prêmio é R$%.2f\n", ganho);
					}
					}
					System.out.print(resetCor);
				} else {
					for (int a = 0; a < 50; a++) {
						if (numeros[a] == tentativa) {
							numeros[a] = 0;
							break;
						}
					}
					System.err.println("Tente novamente.");
					numTentativa++;
					for (int hashtag = 0; hashtag <= 62; hashtag++) {
						System.out.print("#");
					}
					System.out.println();
					for (int hashtag2 = 0; hashtag2 < 61; hashtag2++) {
						if (hashtag2 == 0) {
							System.out.printf("# ");
						} else if (hashtag2 == 60) {
							System.out.printf(" #");
						} else {
							System.out.printf("_");
						}
					}
					System.out.println();
					System.out.printf(
						    "#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|_____________________|#"
						    + "\n#| %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s | %-3s |#\n"
						    + "#|__|_|_|_|_|_|_|_|_|__|#\n",
						    numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5], numeros[6],
						    numeros[7], numeros[8], numeros[9], numeros[10], numeros[11], numeros[12], numeros[13],
						    numeros[14], numeros[15], numeros[16], numeros[17], numeros[18], numeros[19], numeros[20],
						    numeros[21], numeros[22], numeros[23], numeros[24], numeros[25], numeros[26], numeros[27],
						    numeros[28], numeros[29], numeros[30], numeros[31], numeros[32], numeros[33], numeros[34],
						    numeros[35], numeros[36], numeros[37], numeros[38], numeros[39], numeros[40], numeros[41],
						    numeros[42], numeros[43], numeros[44], numeros[45], numeros[46], numeros[47], numeros[48],
						    numeros[49]);
					for (int espaco = 0; espaco <= 62; espaco++) {
						if (espaco == 0) {
							System.out.print("#");
						} else if (espaco == 62) {
							System.out.print("#");
						} else {
							System.out.print(" ");
						}
					}
					System.out.println();
					for (int hashtag = 0; hashtag < 63; hashtag++) {
						System.out.print("#");
					}
					System.out.println();
				}
			} else {
				System.err.println("Número inválido, tente novamente:");
				jogadores++;
			}
		} while (tentativa != numSorteado);
		scan.close();
	}
}
